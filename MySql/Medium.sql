DROP DATABASE IF EXISTS quintonMovies;
CREATE DATABASE quintonMovies;
USE quintonMovies;

CREATE TABLE favMovies (Title VARCHAR (255),
releaseDate YEAR,
rating INT,
movieID INT AUTO_INCREMENT,
PRIMARY KEY (movieID));

INSERT INTO favMovies (title, releaseDate, rating)
VALUES ("Uncut Gems", 2019, 92),
("Bad Boys for Life", 2020, 77),
("Coco", 2017, 97),
("The Wolf of Wall Street", 2013, 79),
("What We Do in the Shadows", 2014, 96),
("Grown Ups", 2010, 10),
("Minions", 2015, 55),
("Hacksaw Ridge", 2016, 85),
("Contagion", 2011, 84),
("Hidden Figures", 2016, 93);

-- Create a query that pulls all movies, in order of release date, where the title includes the letter “s”.
SELECT title, releaseDate FROM favMovies WHERE title LIKE "%s%" ORDER BY releaseDate ASC;

SELECT * FROM favMovies;