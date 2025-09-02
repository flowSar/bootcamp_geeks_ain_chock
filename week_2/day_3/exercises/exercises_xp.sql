-- ===== Exercise 1
-- question 1
SELECT name FROM language;

-- question 2
SELECT f.title, f.description, l.name FROM film f JOIN language l ON f.language_id=l.language_id;

-- question 3
SELECT f.title, f.description, l.name FROM language l left JOIN film f ON l.language_id=f.language_id;

-- question 4

create table new_film (
    id serial primary key,
    name varchar(30)
)


INSERT INTO new_film (name) VALUES ("Pan's Labyrinth"), ('The Orphanage'), ('Volver'), ('Biutiful'), ('The Sea Inside'), ('REC');

-- question 5

create table customer_review (
    review_id serial primary key,
    title varchar(100),
    film_id int,
    language_id int,
    score int,
    review_text text,
    last_update date,
    foreign key (film_id) references new_film(id) on delete cascade,
    foreign key (language_id) references language(language_id) on delete set null
);


-- question 6
INSERT INTO customer_review (title, film_id, language_id, score, review_text, last_update)
VALUES 
(
    'Pan''s Labyrinth',
    1,
    1,
    9,
    'A dark yet beautiful fantasy film that blends reality and imagination. A masterpiece of storytelling.',
    CURRENT_DATE
),
(
    'Inception',
    3,
    1,
    8,
    'Mind-bending sci-fi thriller with stunning visuals and a complex narrative structure.',
    CURRENT_DATE
);

-- question 7

delete from film where film_id=(select film_id from customer_review limit 1);
-- the review will get deleted, but if the film table has other relationships with other table we will get error, we can't delete the table.


-- exercise 2;

-- question 1:
update language set name='Arabic' where language_id=5;
 

-- question 2:
    -- two foreign keys, store_id and address_id, first we need to create the store and address tables and insert at least one row in each.

-- question 3:

drop table customer_review;
    -- we don't need extra checking because deleting this table will not effect other table in any way

-- question 4:
select count(*) 
    from (
        select f.title ,i.film_id  
        from film f 
        left join inventory i 
        on f.film_id = i.film_id) 
        as film_vs_inventory 
        where film_id is null;

-- question 5:
select * from (
    select f.title , f.description ,f.rental_rate,i.film_id
    from film f
    left join inventory i
    on f.film_id = i.film_id)
    as film_vs_inventory
    where film_id is null
    order by rental_rate desc
    limit 30;

-- question 6:
-- 1
select f.*, a.first_name || ' ' || a.last_name as actor_full_name, c."name" as film_category 
	from film f 
	join film_category fc on f.film_id = fc.film_id
	join category c on fc.category_id = c.category_id 
	join film_actor fa on f.film_id = fa.film_id 
	join actor a on fa.actor_id = a.actor_id 
	where c."name" ='Action' and 
	 a.first_name = 'Penelope' and
	a.last_name = 'Monroe'
	and f.description  ~* '.*sumo.*';

-- 2
select * from film where rating='R' and length < 60;

-- 3
select f.*
	from film f 
	join inventory i on f.film_id = i.film_id 
	join rental r on i.inventory_id = r.inventory_id 
	join customer c on r.customer_id = c.customer_id
	where first_name='Matthew' and last_name='Mahan'
	and f.rental_rate > 4
	and r.rental_date BETWEEN '2005-07-28' AND '2005-08-01'
    limit 1
    ;

-- 4

select f.replacement_cost, f.*
	from film f 
	join inventory i on f.film_id = i.film_id 
	join rental r on i.inventory_id = r.inventory_id 
	join customer c on r.customer_id = c.customer_id
	where first_name='Matthew' and last_name='Mahan'
	and f.title = '_boat_' or f.description ~* '.*boat.*'
	order by f.replacement_cost
	limit 1;