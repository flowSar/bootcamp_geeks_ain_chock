#!/usr/bin/python3

import psycopg2

conn = psycopg2.connect(
    user="sardb",
    password="Root890",
    host="localhost",
    port="5433",
    database="restaurant"
)

cursor = conn.cursor()