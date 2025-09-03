#!/usr/bin/python3
import psycopg2
from psycopg2.extras import RealDictCursor

conn = psycopg2.connect(
    user="sardb",
    password="Root890",
    host="localhost",
    port="5433",
    database="countries"
)

cursor = conn.cursor()