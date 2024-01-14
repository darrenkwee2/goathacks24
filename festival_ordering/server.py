from firebase_admin import auth
from flask import Flask, render_template, request, redirect, url_for, jsonify
from flask_restful import Api, Resource
from database import Database

app = Flask(__name__)
api = Api(app)
db = Database()

# Enable CORS for all routes
@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
    return response




# Get menu function per organization
@app.route('/menu', methods=['GET'])
def get_menu():
    try:
        organization = request.args.get('organization')
        items = db.get_items(organization)
        menu = list()
        for item in items:
            item_info = item.to_dict()
            item_info['organization'] = item_info.get('organization').id
            menu.append((item.id, item_info))

        return jsonify({'result': menu})

    except Exception as e:
        return jsonify({'error': str(e)}), 400


@app.route('/menu', methods=['POST'])
def add_item():
    # print("trying to add item...")

    if request.method == 'OPTIONS':
        # Handle OPTIONS request (preflight)
        return jsonify({'status': 'OK'}), 200
    elif request.method == 'POST':
        data = request.get_json()
        description = data.get('description')
        english_name = data.get('english_name')
        ingredients = data.get('ingredients')
        organization = data.get('organization')
        traditional_name = data.get('traditional_name')
        img_URL = data.get('img_URL')
        db.add_item(english_name, traditional_name, organization, description, ingredients, img_URL)
        menu = db.get_items(organization)
        return jsonify({'result': menu}), 200


@app.route('/orders', methods=['GET'])
def get_orders():
    try:
        user = request.args.get('user')
        organization_id = request.args.get('organization_id')

        if user is not None:
            orders = db.get_orders(user)
        elif organization_id is not None:
            orders = db.get_orders(organization_id=organization_id)
        else:
            return jsonify({'error': 'Either user or organization_id must be specified'})

        if not orders:
            return jsonify({'result': f'No orders found for the specified {"user" if user else "organization"}.'})

        items = list()
        for order in orders:
            order_info = order.to_dict()
            order_info['user'] = order_info.get('user').id
            items.append((order.id, order_info))

        return jsonify({'result': list(items)})

    except Exception as e:
        return jsonify({'error': str(e)}), 400

@app.route('/')
def about():
    return render_template('/about')


@app.route('/')
def index():
    return render_template('/app')


@app.route('/components/clubpage', methods=['GET', 'POST'])
def order_form():
    data = request.get_json()
    if request.method == 'POST':
        item = data.get('item')
        user_id = auth.verify_id_token(data.get('token')).get('uid')
        db.place_order(user_id, item)

        return redirect(url_for('/components/clubpage'))

    return render_template('/components/clubpage')


if __name__ == '__main__':
    app.run(debug=True)
