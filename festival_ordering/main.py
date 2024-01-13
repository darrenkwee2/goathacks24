import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import datetime
from google.cloud.firestore_v1 import FieldFilter

latest_order = 1


def initialize_db():
    cred = credentials.Certificate("festival-ordering-firebase-adminsdk-ubjhw-af876a5c70.json")
    firebase_admin.initialize_app(cred)

    db = firestore.client()

    items_collection = db.collection('items')
    orders_collection = db.collection('orders')
    organizations_collection = db.collection('organizations')

    # result = db.collection('items').document('chicken_satay').get()
    return db


def place_order(db, user_id, items):
    global latest_order
    new_order = {
        'user': db.collection('users').document(user_id),
        'items': items,
        'time': datetime.datetime.now(),
        'is_ready': False,
        'order_number': latest_order
    }
    latest_order += 1
    db.collection('orders').add(new_order)


def get_orders(db, user_id=None):
    if user_id is not None:
        user = db.collection('users').document(user_id)
        orders = (
            db.collection('orders')
            .where(filter=FieldFilter('user', '==', user))
            .stream()
        )
    else:
        orders = db.collection('orders').stream()
    return orders


def set_order_ready(db, order_number, is_ready):
    orders = (
        db.collection('orders')
        .where(filter=FieldFilter('order_number', '==', order_number))
        .stream()
    )

    for order in orders:
        db.collection('orders').document(order.id).update({'is_ready': is_ready})


def set_item_availability(db, item, is_available):
    db.collection('items').document(item).update({'is_available': is_available})


# add functions
def add_item(db, english_name, traditional_name, organization, description, ingredients):
    new_item = {
        'english_name': english_name,
        'traditional_name': traditional_name,
        'description': description,
        'is_available': True,
        'organization': db.collection('organizations').document(organization),
        'ingredients': ingredients
    }
    db.collection('items').document(english_name.lower().replace(" ", "_")).set(new_item)


if __name__ == '__main__':
    connection = initialize_db()
    # add_item(connection, 'Bottled Water', 'Bottled Water', 'SASE', 'Water in a bottle.', list(['water', 'bottle']))
    # set_item_availability(connection, 'bottled_water', False)
    # place_order(connection, 'rvyDzQAc3WYk7T1lEzSRlTKHnwX2', list(['chicken_satay']))
    # place_order(connection, 'rvyDzQAc3WYk7T1lEzSRlTKHnwX2', list(['chicken_satay']))
    # place_order(connection, 'rvyDzQAc3WYk7T1lEzSRlTKHnwX2', list(['chicken_satay']))
    # place_order(connection, 'rvyDzQAc3WYk7T1lEzSRlTKHnwX2', list(['chicken_satay']))
    # set_order_ready(connection, 1, True)
    # orders = get_orders(connection, 'rvyDzQAc3WYk7T1lEzSRlTKHnwX2')
    # for o in orders:
    #     print(o.id)