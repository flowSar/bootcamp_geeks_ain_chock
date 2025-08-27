-- ====== Daily Challenge 1

SELECT count(*) FROM actors;


INSERT INTO actors (first_name) VALUES ('brahim');
-- If we add a new actor with some blank fields, we will get an error because the other fields can't accept null as a value.
