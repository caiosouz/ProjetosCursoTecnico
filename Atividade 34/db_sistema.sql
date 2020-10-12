CREATE DATABASE db_sistema;
USE db_sistema;

CREATE TABLE tb_usuario (
 IDUSUARIO INT(10) NOT NULL,
 NOME VARCHAR (50) NOT NULL,
 SOBRENOME VARCHAR (50) NOT NULL,
 RG INT(15) NOT NULL,
 CPF INT(12) NOT NULL, 
 EMAIL VARCHAR (50) NOT NULL,
 TELEFONE INT(15) NOT NULL, 
 ENDERECO VARCHAR (50) NOT NULL,
 PRIMARY KEY (IDUSUARIO));
 
INSERT INTO tb_usuario (IDUSUARIO, NOME, SOBRENOME, RG, CPF, EMAIL, TELEFONE, ENDERECO)
VALUES  (1, "CAIO","SOUZA", 00000, 00000000, "CAIO@LALA.COM", 000000, "QNM G CONJUNTO K CASA 2"),
(2, "CAIO2","SOUZA2", 00000, 00000000, "CAIO@LALA.COM", 000000, "QNM G CONJUNTO K CASA 3"),
(3, "CAIO3","SOUZA3", 00000, 00000000, "CAIO@LALA.COM", 000000, "QNM G CONJUNTO K CASA 4"),
(4, "CAIO4","SOUZA4", 00000, 00000000, "CAIO@LALA.COM", 000000, "QNM G CONJUNTO K CASA 5"),
(5, "CAIO5","SOUZA5", 00000, 00000000, "CAIO@LALA.COM", 000000, "QNM G CONJUNTO K CASA 6"),
(6, "CAIO6","SOUZA6", 00000, 00000000, "CAIO@LALA.COM", 000000, "QNM G CONJUNTO K CASA 7"),
(7, "CAIO7","SOUZA7", 00000, 00000000, "CAIO@LALA.COM", 000000, "QNM G CONJUNTO K CASA 8"),
(8, "CAIO8","SOUZA8", 00000, 00000000, "CAIO@LALA.COM", 000000, "QNM G CONJUNTO K CASA 9"),
(9, "CAIO9","SOUZA9", 00000, 00000000, "CAIO@LALA.COM", 000000, "QNM G CONJUNTO K CASA 2"),
(10, "CAIO0","SOUZA0", 00000, 00000000, "CAIO@LALA.COM", 000000, "QNM G CONJUNTO K CASA 0");

UPDATE tb_usuario
SET Telefone = "991150700", Endereco = "Ceilandia"
WHERE IDUSUARIO = "4";

DELETE FROM tb_usuario WHERE IDUSUARIO = "10";



select * from tb_usuario;