from flask import Flask, render_template, request, redirect, url_for, jsonify
from flask_restful import Api, Resource
from database import Database

app = Flask(__name__)
api = Api(app)
db = Database()

# In-memory database for demonstration purposes
orders = []
todos = {}


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
def add_menu_item():
    data = request.get_json()
    if 'english_name' not in data or 'organization' not in data or 'ingredients' not in data:
        return jsonify({'error': 'Invalid request. Provide id, name, and price in JSON payload.'}), 400

    item_description = data.get('item_description')
    english_name = data.get('english_name')
    ingredients = data.get('ingredients')
    organization = data.get('organization')
    traditional_name = data.get('traditional_name')
    db.add_item(english_name, traditional_name, organization, item_description, ingredients)


@app.route('/')
def about():
    return render_template('about.html')


@app.route('/')
def index():
    return render_template('index.html', orders=orders)


@app.route('/order_form', methods=['GET', 'POST'])
def order_form():
    if request.method == 'POST':
        item = request.form['item']
        quantity = request.form['quantity']

        order = {'item': item, 'quantity': quantity}
        orders.append(order)

        return redirect(url_for('index'))

    return render_template('order_form.html')


if __name__ == '__main__':
    app.run(debug=True)
