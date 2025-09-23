#!/usr/bin/python3
import math

class Pagination:
    
    def __init__(self, items=None, page_size=10):
        if items is None:
            self.items = []
        else:
            self.items = items

        self.current_idx = 0
        self.page_size = page_size
        self.total_pages = math.ceil(len(self.items) / self.page_size)
    
    def get_visible_items(self):
        start = self.current_idx
        end = start + self.page_size
        return self.items[start: end]
    
    def go_to_page(self, page_num):
        if page_num > self.total_pages or page_num == 0:
            raise ValueError(f"the page {page_num} doesn\'t exist, number of pages are {self.total_pages}")
        else:
            self.current_idx = ((page_num - 1) * self.page_size) 


    def first_page(self):
        self.current_idx  = 0
        return self
    
    def last_page(self):
        self.current_idx = (self.total_pages - 1) * self.page_size
        return self
    
    def next_page(self):
        self.current_idx += self.page_size
        return self

    def previous_page(self):
        self.current_idx -= self.page_size
        return self
    
    def __str__(self):
        return "\n".join(str(item) for item in self.get_visible_items())


try:
    alphabetList = list("abcdefghijklmnopqrstuvwxyz")
    p = Pagination(alphabetList, 4)

    print(p.get_visible_items())
    # ['a', 'b', 'c', 'd']

    p.next_page()
    print(p.get_visible_items())
    # ['e', 'f', 'g', 'h']

    p.last_page()
    print(p.get_visible_items())
    # ['y', 'z']

    p.go_to_page(7)
    print(p.current_idx + 1)
    # Output: 7

    p.go_to_page(0)
    # Raises ValueError
except ValueError as e:
    print(e)


