# ===== Exercise 1

-- create public database
CREATE DATABASE public;

-- create table items
CREATE TABLE items (
    id SERIAL PRIMARY KEY,
    name VARCHAR (30),
    price INTEGER
);

-- create table customers
CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30)
);

-- All the items.
SELECT * FROM items;

-- All the items with a price above 80 (80 not included).
SELECT * FROM items WHERE price > 80;

-- All the items with a price below 300. (300 included)
SELECT * FROM items WHERE price <= 300;

-- All customers whose last name is ‘Smith’ (What will be your outcome?).
SELECT * FROM customers WHERE last_name='Smith';
-- the outcome will be empty table

-- All customers whose last name is ‘Jones’.
SELECT * FROM customers WHERE last_name='Jones';

-- All customers whose firstname is not ‘Scott’
SELECT * FROM customers WHERE first_name!='Scott';
