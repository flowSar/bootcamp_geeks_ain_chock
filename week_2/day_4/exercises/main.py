#!/usr/bin/python3
from menu_item import MenuItem
from menu_manager import MenuManager

item = MenuItem('Burger', 35)
# item.delete()
# item.save()
# item.update('Veggie Burger', 37)
# item2 = MenuManager.get_by_name('Beef Stew')

menumanager = MenuManager()
item2 = menumanager.get_by_name('Veggie Burger')
items = menumanager.all_items()

for item in items:
    print(f'{item[1]}: {item[2]}')

print('item: ', item2)
print(items)
