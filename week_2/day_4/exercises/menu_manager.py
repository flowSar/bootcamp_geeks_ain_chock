#!/usr/bin/python3
from db import cursor

class MenuManager:

    def __init__(self):
        pass

    def get_by_name(self, name):
        cursor.execute('SELECT * from menu_items where item_name=%s', (name,))
        return cursor.fetchone()
        

    def all_items(self):
        cursor.execute('SELECT * from menu_items')
        return cursor.fetchall()