from firebase_admin import auth
from flask import Flask, render_template, request, redirect, url_for, jsonify
from flask_restful import Api, Resource
from database import Database

app = Flask(__name__)
api = Api(app)
db = Database()


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
    data = request.get_json()
    # if 'english_name' not in data or 'organization' not in data or 'ingredients' not in data:
    #     return jsonify({'error': 'Invalid request. Provide id, name, and price in JSON payload.'}), 400

    description = data.get('description')
    english_name = data.get('english_name')
    ingredients = data.get('ingredients')
    organization = data.get('organization')
    traditional_name = data.get('traditional_name')
    img_URL = data.get('img_URL')
    db.add_item(english_name, traditional_name, organization, description, ingredients, img_URL)

    return jsonify({'result': 'Added item successfully.'})


@app.route('/orders', methods=['GET'])
def get_orders():
    try:
        # data = request.get_json()
        #
        # user = data.get('user', None)
        # organization_id = data.get('organization_id', None)
        #
        # if user is not None:
        #     db.get_orders(user_id=user)
        # elif organization_id is not None:
        #     db.get_orders(organization_id=organization_id)
        # else:
        #     db.get_orders()

        user = request.args.get('user')
        orders = db.get_orders(user)
        items = list()
        for order in orders:
            order_info = order.to_dict()
            order_info['user'] = order_info.get('user').id
            items.append((order.id, order_info))

        return jsonify({'result': orders})

        # return jsonify({'result': get_orders})

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
