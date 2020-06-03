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

SELECT * FROM favCars;