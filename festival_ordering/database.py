import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import datetime
from google.cloud.firestore_v1 import FieldFilter


class Database:
    def __init__(self):
        cred = credentials.Certificate("festival-ordering-firebase-adminsdk-ubjhw-af876a5c70.json")
        firebase_admin.initialize_app(cred)
        self.db = firestore.client()
        self.latest_order = 1

    def place_order(self, user_id, items):
        new_order = {
            'user': self.db.collection('users').document(user_id),
            'items': items,
            'time': datetime.datetime.now(),
            'is_ready': False,
            'order_number': self.latest_order
        }
        self.latest_order += 1
        self.db.collection('orders').add(new_order)

    def get_orders(self, user_id=None):
        if user_id is not None:
            user = self.db.collection('users').document(user_id)
            orders = (
                self.db.collection('orders')
                .where(filter=FieldFilter('user', '==', user))
                .stream()
            )
        else:
            orders = self.db.collection('orders').stream()
        return orders

    def get_items(self, organization):
        org_ref = self.db.collection('organizations').document(organization)
        items = (
            self.db.collection('items')
            .where(filter=FieldFilter('organization', '==', org_ref))
            .stream()
        )

        return items

    def set_order_ready(self, order_number, is_ready):
        orders = (
            self.db.collection('orders')
            .where(filter=FieldFilter('order_number', '==', order_number))
            .stream()
        )

        for order in orders:
            self.db.collection('orders').document(order.id).update({'is_ready': is_ready})

    def set_item_availability(self, item, is_available):
        self.db.collection('items').document(item).update({'is_available': is_available})

    def add_item(self, english_name, traditional_name, organization, description, ingredients):
        new_item = {
            'english_name': english_name,
            'traditional_name': traditional_name,
            'description': description,
            'is_available': True,
            'organization': self.db.collection('organizations').document(organization),
            'ingredients': ingredients
        }
        self.db.collection('items').document(english_name.lower().replace(" ", "_")).set(new_item)


if __name__ == '__main__':
    db = Database()
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
    # menu = db.get_items("AIS")
    # for i in menu:
    #     print(i.id)