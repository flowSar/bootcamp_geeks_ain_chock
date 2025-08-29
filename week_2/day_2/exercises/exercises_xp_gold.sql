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


-- ===== Exercise 2

-- ===== Exercise 3

-- ===== Exercise 4

-- ===== Exercise ...