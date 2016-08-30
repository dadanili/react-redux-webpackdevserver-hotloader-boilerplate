create database knowledgeable;
use knowledgeable;

create table User (
id int NOT NULL AUTO_INCREMENT,
firstname varchar(30) NOT NULL,
lastname varchar(30) NOT NULL,
linkedin varchar(512) NOT NULL,
PRIMARY KEY (ID)
);

create table Expertise (
id int NOT NULL AUTO_INCREMENT,
name varchar(30) NOT NULL,
PRIMARY KEY (ID)
);


