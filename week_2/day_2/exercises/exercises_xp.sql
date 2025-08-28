-- ===== Exercise 1

SELECT * FROM items order by price ASC;

SELECT * FROM items WHERE price >= 80 ORDER BY price DESC;

SELECT first_name, last_name FROM customers ORDER BY first_name ASC LIMIT 3;

SELECT last_name FROM customers ORDER BY last_name DESC;


-- ===== Exercise 2

-- question 01
SELECT * FROM customer;

-- question 02
SELECT first_name, last_name AS full_name FROM names;

-- question 03
SELECT distinct create_date FROM customer;

-- question 04
SELECT * FROM customer ORDER BY first_name DESC;

-- question 05
SELECT film_id, title, description, release_year, rental_rate FROM film ORDER BY rental_rate ASC;

-- question 06
SELECT address, phone FROM customer JOIN address ON customer.address_id=address.address_id WHERE address.district='Texas';

-- question 07
SELECT * FROM film WHERE film_id IN(15, 150);

-- question 08
SELECT film_id, title, description, length, rental_rate FROM film WHERE title='Airport Pollock';

-- question 09
SELECT film_id, title, description, length, rental_rate FROM film WHERE title ~* '^Ai';

-- question 10
SELECT * FROM film ORDER BY replacement_cost ASC LIMIT 10;

-- question 11

-- question 12

-- question 13

-- question 14

