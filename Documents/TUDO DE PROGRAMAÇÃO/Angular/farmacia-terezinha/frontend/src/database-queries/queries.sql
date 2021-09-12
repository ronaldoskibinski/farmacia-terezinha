create database farmaciaterezinha;

use farmaciaterezinha;

create table usuario (
	id INT NOT NULL AUTO_INCREMENT,
	nome varchar(30),
	telefone varchar(14),
	email varchar(100),
	endereco varchar(100),
	senha varchar(100),
    PRIMARY KEY (id)
);

