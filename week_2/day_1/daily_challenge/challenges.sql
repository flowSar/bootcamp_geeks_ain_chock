-- ====== Daily Challenge 1

select count(*) from actors;


insert into actors (first_name) values ('brahim');
-- If we add a new actor with some blank fields, we will get an error because the other fields can't accept null as a value.
