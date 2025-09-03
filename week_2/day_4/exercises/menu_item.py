#!/usr/bin/python3

from db import conn, cursor

class MenuItem:

    def __init__(self, name, price):
        self.name = name
        self.price = price
    
    def save(self):
        cursor.execute('INSERT INTO menu_items (item_name, item_price) values (%s, %s)', (self.name, self.price))

        if cursor.rowcount > 0:
            print("Item added successfully!")
        else:
            print("Item insertion failed!")
        conn.commit()

    def delete(self):
        cursor.execute('DELETE FROM menu_items WHERE item_name = %s', (self.name,))
        if cursor.rowcount > 0:
            print("item was deleted successfully!")
        else:
            print("Item deleting failed, there was an error")
        conn.commit()

    def update(self, name, price):
        cursor.execute('UPDATE menu_items set item_name=%s, item_price=%s where item_name=%s', (name, price, self.name))
        if cursor.rowcount > 0:
            print("the item was updated successfully!")
        else:
            print("the item updating failed")
        
        conn.commit()
