from flask import Flask, render_template, request, redirect, url_for, jsonify
from flask_restful import Api, Resource

app = Flask(__name__)
api = Api(app)

# In-memory database for demonstration purposes
orders = []
todos = {}

# Get menu function per organization
@app.route('/menu', methods=['GET'])
def get_menu():
    try:
        # Extract parameters from the query string
        organization = request.args.get('orgnizaion')

        # Do something with the parameters (replace this with your logic)
        result = f"Received parameters: organization={organization}"

        # Return a JSON response
        return jsonify({'result': result})

    except Exception as e:
        return jsonify({'error': str(e)}), 400



@app.route('/menu', methods=['POST'])
def add_menu_item():
    data = request.get_json()
    if 'id' not in data or 'name' not in data or 'price' not in data:
        return jsonify({'error': 'Invalid request. Provide id, name, and price in JSON payload.'}), 400

    item_id = data['id']
    name = data['name']
    price = data['price']
    menu_items[item_id] = {'name': name, 'price': price}

    return jsonify({item_id: {'name': name, 'price': price}})


@app.route('/menu/<string:item_id>', methods=['PUT'])
def update_menu_item(item_id):
    data = request.get_json()
    if 'name' not in data or 'price' not in data:
        return jsonify({'error': 'Invalid request. Provide name and price in JSON payload.'}), 400

    name = data['name']
    price = data['price']
    menu_items[item_id] = {'name': name, 'price': price}

    return jsonify({item_id: {'name': name, 'price': price}})



@app.route('/menu/<string:item_id>', methods=['DELETE'])
def delete_menu_item(item_id):
    if item_id not in menu_items:
        return jsonify({'error': 'Item not found'}), 404

    del menu_items[item_id]
    return jsonify({'result': True})



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