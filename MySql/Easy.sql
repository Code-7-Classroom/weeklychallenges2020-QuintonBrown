DROP DATABASE IF EXISTS quintonBooks;
CREATE DATABASE quintonBooks;
USE quintonBooks;
CREATE TABLE favBooks (Title VARCHAR (255),
publishDate YEAR,
authorFirst VARCHAR (255),
authorLast VARCHAR (255),
bookID INT AUTO_INCREMENT,
PRIMARY KEY (bookID));

INSERT INTO favBooks (Title, publishDate, authorFirst, authorLast)
VALUES ("Rich Dad Poor Dad", 1997, "Robert", "Kiyosaki"),
("The Total Money Makeover", 2003, "Dave", "Ramsey"),
("Transforming Your Relationship With Money", 1992, " Vicki", "Robin"),
("The Richest Man in Babylon", 1926, "George", "Clason"),
("The Millionaire Next Door: The Surprising Secrets of America's Wealthy", 1996, "Thomas", "Stanley");

INSERT INTO favBooks (Title, publishDate, authorFirst, authorLast)
VALUES ("The Handmaid's Tale", 1985, "Margaret", "Atwood"),
("Where the Wild Things Are", 1963, "Maurice", "Sendak");
-- Remove the oldest book
DELETE FROM favBooks ORDER BY publishDate ASC LIMIT 1;
-- Provide an additional query giving the sum of all books
SELECT COUNT(*) FROM favBooks;

SELECT * FROM favBooks;