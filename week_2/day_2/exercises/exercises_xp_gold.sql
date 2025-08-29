-- ===== Exercise 1
-- question 1)-1
select rating, count(*) from film group by rating; 
-- question 1)-2
select * 
    from 
    ( select * from film where rating in ('G', 'PG-13') ) 
    as filterd_film 
    where rental_rate < 3.00 
    and length < 120;

-- question 1)-3

-- update cutomer
update customer set first_name='Brahim', last_name='Sarouri', email='brahim@gmail.com' where customer_id=1;

-- update address
update address 
set address='lamkansa 5 rue 10 N 10 ain chock',
address2='casablanca morocco',
district='ain chock',
postal_code='25800',
phone='0987654321',
last_update=current_date
where address_id = ( select address_id from customer where customer_id=1);

-- update city
update city 
set city='casablanca', last_update=current_date 
where city_id = (
	select city.city_id from customer cus join
	address ad on cus.address_id=ad.address_id
	join city on ad.city_id=city.city_id where cus.customer_id=1
)
-- update country 
update country set country='Morocco', last_update=current_date where country_id=(
	select country.country_id from customer cus join
	address ad on cus.address_id=ad.address_id
	join city on ad.city_id=city.city_id 
	join country on city.country_id=country.country_id where customer_id=1
);

-- question 1)-4

update address 
set address='lamkansa 5 rue 10 N10 ain chock',
address2='casablanca morocco',
district='ain chock',
postal_code='25800',
phone='0987654321',
last_update=current_date
where address_id = ( select address_id from customer where customer_id=1);

-- ===== Exercise 2 update
-- question 1;

update students set birth_date=to_date('02/11/1998', 'DD/MM/YYYY') where last_name='Benichou' and first_name in ('Lea', 'Marc');

-- question -2

update students set last_name=‘Guez’ where first_name='David' and last_name=‘Grez’;

-- delete 

delete from students where first_name='Lea' and last_name='Benichou';

-- count 

select count(*) from students;

select count(*) from students where birth_date > '2000-01-1'

-- Insert / Alter

alter table students add column math_grade integer;

update students set math_grade=80 where id=1;

update students set math_grade=90 where id in (2, 4);

update students set math_grade=40 where id=6;

select count(*) from students where math_grade > 83;

insert into students (first_name, last_name, birth_date, math_grade) values ('Omer', 'Simpson', '2000-01-1', 70);


select first_name, last_name, count (*) as total_grade from students group by id;

-- SUM

select sum(math_grade) from students;

-- ===== Exercise 3

    -- part 1
        -- 1-
            create table purchases (
                id serial primary key,
                customer_id int,
                item_id int,
                quantity_purchased int
            );

        -- 2-
        insert into purchases (customer_id, item_id, quantity_purchased) values (3, 3, 1), (5,2, 10 ), (1, 1, 2);

    -- Part II
        -- 1) 1
            select * from purchases;
            -- no the purchases only is not useful if we didn't link them to the customer
        -- 1) 2
            select * from customers join purchases on customers.customer_id=purchases.customer_id;
        -- 1) 3

