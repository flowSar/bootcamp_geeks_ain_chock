-- ===== Exercise 1

-- create
CREATE DATABASE bootcamp;

CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    last_name VARCHAR(40),
    first_name VARCHAR(40),
    birth_date DATE
);

-- insert 

INSERT INTO students (last_name, first_name, birth_date) values
    ('Marc', 'Benichou', TO_DATE('02/11/1998', 'DD/MM/YYYY')),
    ('Yoan', 'Cohen', TO_DATE('03/12/2010', 'DD/MM/YYYY')),
    ('Lea', 'Benichou', TO_DATE('27/07/1987', 'DD/MM/YYYY')),
    ('Amelia', 'Dux', TO_DATE('07/04/1996', 'DD/MM/YYYY')),
    ('David', 'Grez', TO_DATE('14/06/2003', 'DD/MM/YYYY')),
    ('Omer', 'Simpson', TO_DATE('03/10/1980', 'DD/MM/YYYY'));


INSERT INTO students (last_name, first_name, birth_date) values ('Sarouri', 'Brahim', '1995-09-18');

-- select 

-- question 1
SELECT * FROM students;

-- question 2
SELECT first_name, last_name FROM students;

-- question 3
-- question 3)-1
SELECT first_name, last_name FROM students WHERE id=2;

-- question 3)-2
select first_name, last_name from students where last_name='Benichou' AND first_name='Marc';

-- question 3)-3
select first_name, last_name from students where last_name='Benichou' OR first_name='Marc';

-- question 3)-4
SELECT first_name, last_name FROM students where first_name ~* 'a';

-- question 3)-5
SELECT first_name, last_name FROM students where first_name ~* '^a';


-- question 3)-6
SELECT first_name, last_name FROM students where first_name ~* 'a$';

-- question 3)-7
SELECT first_name, last_name FROM students where first_name ~* 'a.$';

-- question 3)-8
SELECT first_name, last_name FROM students WHERE id IN (2, 3);

-- question 4
SELECT first_name, last_name FROM students where birth_date >= TO_DATE('1/01/2000', 'DD/MM/YYYY');

