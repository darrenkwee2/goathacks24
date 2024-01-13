import threading
import time

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

    def place_order(self, user_id, item):
        new_order = {
            'user': self.db.collection('users').document(user_id),
            'item': item,
            'time': datetime.datetime.now(),
            'is_ready': False,
            'order_number': self.latest_order
        }
        self.latest_order += 1
        self.db.collection('orders').add(new_order)

    def get_orders(self, user_id=None, organization_id=None):
        if user_id is not None:
            user = self.db.collection('users').document(user_id)
            orders = (
                self.db.collection('orders')
                .where(filter=FieldFilter('user', '==', user))
                .stream()
            )
        elif organization_id is not None:
            organization = self.db.collection('organizations').document(organization_id)
            orders = (
                self.db.collection('orders')
                .where(filter=FieldFilter('organization', '==', organization))
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

    def get_orders_realtime(self, query_result):
        # Create an Event for notifying main thread.
        callback_done = threading.Event()

        # Create a callback on_snapshot function to capture changes
        def on_snapshot(col_snapshot, changes, read_time):
            print("Callback received query snapshot.")
            for doc in col_snapshot:
                query_result.append(doc)
            callback_done.set()

        col_query = self.db.collection("organizations")
        # Watch the collection query
        query_watch = col_query.on_snapshot(on_snapshot)


if __name__ == '__main__':
    db = Database()
    # db.place_order('rvyDzQAc3WYk7T1lEzSRlTKHnwX2', list(['chicken_satay']))
    # db.place_order('rvyDzQAc3WYk7T1lEzSRlTKHnwX2', list(['chicken_satay']))
    # db.place_order('rvyDzQAc3WYk7T1lEzSRlTKHnwX2', list(['chicken_satay']))
    # db.place_order('rvyDzQAc3WYk7T1lEzSRlTKHnwX2', list(['chicken_satay']))
    # db.place_order('rvyDzQAc3WYk7T1lEzSRlTKHnwX2', list(['chicken_satay']))
    orders = list()
    db.get_orders_realtime(orders)
    while True:
        time.sleep(3)
