-- daily challange
-- part 1
-- question 1
create table customer (
	customer_id serial primary key,
	first_name varchar(30),
	last_name varchar(30) not null
);

create table customer_profile (
	customer_profile_id serial primary key,
	isLoggedIn boolean DEFAULT false,
	customer_id int unique,
	foreign key (customer_id) references customer(customer_id)
)

-- question 2
insert into customer (first_name, last_name) values ('John', 'Doe'), ('Jerome', 'Lalu'), ('Lea', 'Rive');

-- question 3
insert into customer_profile (isLoggedIn, customer_id) values (true, 1), (false, 2);

-- question 4

select c.first_name from customer c
	join customer_profile cp on c.customer_id = cp.customer_id
	where cp.isLoggedIn = true;

-- part 2

-- question 1
create table Book (
    book_id serial primary key,
    title varchar(100) not null,
    author varchar(100) not null
);

-- question 2
insert into Book (title, author) 
    values ('Alice In Wonderland', 'Lewis Carroll'), 
    ('Harry Potter', 'J.K Rowling'), 
    ('To kill a mockingbird', 'Harper Lee');

-- question 3
create table Student (
    student_id serial primary key,
    name varchar(40) not null unique,
    age SMALLINT check (age < 15)
);


-- question 4

insert into Student (name, age) 
    values
    ('John', 12),
    ('Lera', 11),
    ('Patrick', 10),
    ('Bob', 14);

-- question 5
create table Library (
    library_id serial primary key,
    book_fk_id int,
    student_id int,
    borrowed_date date,
    foreign key (book_fk_id) references Book(book_id) on delete cascade ON UPDATE CASCADE,
    foreign key (student_id) references Student(student_id) on delete cascade ON UPDATE CASCADE
);

-- question 6
insert into Library (student_id,book_fk_id, borrowed_date)
    values 
    (1, 1, to_date('15/02/2022', 'DD/MM/YYYY')),
    (4, 3, to_date('03/03/2021', 'DD/MM/YYYY')),
    (2, 1, to_date('23/05/2021', 'DD/MM/YYYY')),
    (3, 2, to_date('12/08/2021', 'DD/MM/YYYY'));

-- question 7
select * from Library;

select s.name, b.title from Library l
    join Student s on s.student_id = l.student_id
    join book b on l.book_fk_id = b.book_id;

select avg(s.age) as average_age from Library l
    join student s on s.student_id = l.student_id
    join book b on l.book_fk_id = b.book_id
	where b.title='Alice In Wonderland';

delete from student where id=1;
-- one row will get deleted becuase the foreign key of the student is on cascade





