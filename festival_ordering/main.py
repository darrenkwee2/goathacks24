import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import datetime


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
    new_order = {
        'user': 'users\\' + user_id,
        'items': items,
        'time': datetime.datetime.now(),
        'is_ready': False
    }
    pass


def set_item_availability(db, item, is_available):
    db.collection('items').document(item).update({'is_available': is_available})


# add functions
def add_item(db, english_name, traditional_name, organization, description, ingredients):
    new_item = {
        'english_name': english_name,
        'traditional_name': traditional_name,
        'description': description,
        'is_available': True,
        'organization': '/organizations/' + organization,
        'ingredients': ingredients
    }
    db.collection('items').document(english_name.lower().replace(" ", "_")).set(new_item)


if __name__ == '__main__':
    connection = initialize_db()
    add_item(connection, 'Water', 'Water', 'SASE', 'Bottled water', list(['water']))
    set_item_availability(connection, 'water', False)
    # place_order(connection)
