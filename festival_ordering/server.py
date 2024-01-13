from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# In-memory database for demonstration purposes
orders = []

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
