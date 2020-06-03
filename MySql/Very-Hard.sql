DROP DATABASE IF EXISTS quintonLikes;
CREATE DATABASE quintonLikes;
USE quintonLikes;
CREATE TABLE favCars (carMake 	VARCHAR (255),
carModel VARCHAR (255),
carYear INT,
carID INT AUTO_INCREMENT,
PRIMARY KEY (carID));

INSERT INTO favCars (carMake, carModel, carYear)
VALUES ("Ford", "Fusion", "2020"),
("Dodge", "Charger", "2020"),
("Jeep", "Cherokee", "2020");

INSERT INTO favCars (carMake, carModel, carYear)
VALUES ("Ford", "Mustang", "2021"),
("Dodge", "Challenger", "2022"),
("Jeep", "Wrangle", "2023");
-- Write a query to add in three cars at once Write a query to add in prices and colors for each of these cars
INSERT INTO favCars (carMake, carModel, carYear)
VALUES ("Ford", "Taurus", "1977"),
("Dodge", "Durango", "1985"),
("Jeep", "Rubicon", "1999");

-- Write a query to put the Make and Model together in one column
SELECT CONCAT(carMake, " ", carModel) AS carMakeAndModel FROM favCars;

-- Create a new query that adds an additional column to the results to show how many cars have the same Make.
SELECT 
    carMake, 
    COUNT(carMake)
FROM
    favCars
GROUP BY carMake
HAVING COUNT(carMake) > 1;

SELECT * FROM favCars;