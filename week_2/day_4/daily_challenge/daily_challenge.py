#!/usr/bin/python3

import requests
import random
from db import conn, cursor

api_url = 'https://restcountries.com/v3.1/all?fields=name,capital,flag,subregion,population'

# create country table
cursor.execute('''
    CREATE TABLE IF NOT EXISTS country (
               country_id SERIAL PRIMARY KEY,
               name VARCHAR(100),
               flag VARCHAR(10),
               subregion VARCHAR(100),
               population INT
               )

''')
conn.commit()

# get data from api
# select 10 random countries and insert them to database
def save_date_to_db():
    try:
        # send GET request to PI
        response = requests.get(api_url)
        countries = []
        # check if the request was sucess
        if response.status_code == 200:
            countries = response.json()

        # get 10 random countries
        random_countries = random.sample(countries, 10)
        for country in random_countries:
            name = country['name']['common']
            flag = country['flag']
            subregion = country['subregion']
            population = country['population']
            insert(name, flag, subregion, population)
    except Exception as e:
        print(f'Error: {e}')

        
# insert to database
def insert(name, flag, subregion, population):
    cursor.execute('INSERT INTO country (name, flag, subregion, population) values (%s, %s, %s, %s)', (name, flag, subregion, population))
    if cursor.rowcount > 0:
        print('insert was successfully')
    else:
        print('error : insertion failed')
    conn.commit()

save_date_to_db()