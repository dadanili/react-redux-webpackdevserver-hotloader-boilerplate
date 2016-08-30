create database knowledgeable;
use knowledgeable;

create table Users (
id int NOT NULL AUTO_INCREMENT,
firstname varchar(30) NOT NULL,
lastname varchar(30) NOT NULL,
linkedin varchar(512) NOT NULL,
blurb varchar(1000) NOT NULL,
charityId varchar(100),
PRIMARY KEY (ID)
);

create table Expertises (
id int NOT NULL AUTO_INCREMENT,
name varchar(30) NOT NULL,
PRIMARY KEY (ID)
);

create table Charities (
id int NOT NULL AUTO_INCREMENT,
name varchar(100) NOT NULL,
PRIMARY KEY (ID)
);


create table UserExpertises ( 
id int NOT NULL AUTO_INCREMENT,
userId int NOT NULL,
expertiseId int NOT NULL,
PRIMARY KEY (ID) 
);

create table UserCharities ( 
id int NOT NULL AUTO_INCREMENT,
userId int NOT NULL,
CharityId int NOT NULL,
PRIMARY KEY (ID) 
);

insert into Charities (name) values ("Salvation Army");
insert into Charities (name) values ("Feeding America");
insert into Charities (name) values ("Task Force for Global Health");
insert into Charities (name) values ("St. Jude Children/'s Research Hospital");


