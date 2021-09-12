create database farmaciaterezinha;

use farmaciaterezinha;

create table user (
	id INT NOT NULL AUTO_INCREMENT,
	name varchar(30),
	phone varchar(14),
	email varchar(100),
	address varchar(100),
	password varchar(100),
    PRIMARY KEY (id)
);

