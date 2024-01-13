from flask import Flask, render_template, request, redirect, url_for, jsonify
from database import Database

'''
    $jsonData = @{
         user_id = "lapicus"
         items = "buns"
    }

    $headers = @{
        "Content-Type" = "application/json"
    }

    Invoke-WebRequest -Uri "http://127.0.0.1:5000/place_order" -Method Post -Body ($jsonData | ConvertTo-Json) -Headers $headers
    '''

app = Flask(__name__)
db = Database()

# In-memory database for demonstration purposes
orders = []

@app.route('/')
def index():
    return render_template('index.html', orders=orders)


@app.route('/place_order', methods=['POST'])
def place_order():
    # Assuming the data sent in the POST request is in JSON format
    data = request.get_json()
    if not data or 'user_id' not in data or 'items' not in data:
        return jsonify({"error": "Invalid JSON data. Please provide 'user_id' and 'items'."}), 400

    # Accessing arguments from the JSON data
    user_id = data.get('user_id')
    items = data.get('items')

    db.place_order(user_id, items)

    # Process the arguments as needed
    result = f"Order placed successfully. User ID: {user_id}, Items: {items}"

    # Returning a JSON response
    return jsonify({"message": result})


if __name__ == '__main__':
    app.run(debug=True)
