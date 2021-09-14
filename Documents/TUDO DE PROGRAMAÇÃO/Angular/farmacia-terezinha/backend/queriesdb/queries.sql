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

create table medicines (
	id INT NOT NULL AUTO_INCREMENT,
    cod BIGINT,
    name varchar(100),
    qtdmg varchar(20),
    lab varchar(100),
    val double,
    img varchar(200),
    PRIMARY KEY(id)
)



INSERT INTO medicines (cod, name, qtdmg, lab, val, img) VALUES (
	1,
    "Metformina 30 comprimidos",
    "500mg",
    "Generico MERCK",
    9.25,
    "..\\frontend\\src\\assets\\imgs\\medicines\\metformina.jpg"
)

INSERT INTO medicines (cod, name, qtdmg, lab, val, img) VALUES (
	2,
    "Enalapril 30 comprimidos",
    "20mg",
    "Generico MEDLEY",
    16.74,
    "..\\frontend\\src\\assets\\imgs\\medicines\\enalapril.jpg"
)

INSERT INTO medicines (cod, name, qtdmg, lab, val, img) VALUES (
	3,
    "Artrofan 30 capsulas",
    "500mg",
    "Flora Nativa do Brasil",
    31.90,
    "..\\frontend\\src\\assets\\imgs\\medicines\\artrofan.jpg"
)