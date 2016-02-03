-- Adminer 4.2.3 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DROP DATABASE IF EXISTS `crm`;
CREATE DATABASE `crm` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `crm`;

DROP TABLE IF EXISTS `actividades`;
CREATE TABLE `actividades` (
  `idact` int(11) NOT NULL AUTO_INCREMENT,
  `idcont` int(11) NOT NULL,
  `idord` int(11) NOT NULL,
  `fecha` datetime DEFAULT CURRENT_TIMESTAMP,
  `duracion` int(11) DEFAULT NULL,
  `obs` text,
  PRIMARY KEY (`idact`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


DROP TABLE IF EXISTS `contactos`;
CREATE TABLE `contactos` (
  `idcont` int(11) NOT NULL AUTO_INCREMENT,
  `created` datetime DEFAULT CURRENT_TIMESTAMP,
  `nombre` varchar(100) DEFAULT NULL,
  `empresa` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `telefono` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`idcont`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `contactos` (`idcont`, `created`, `nombre`, `empresa`, `email`, `telefono`) VALUES
(78,	'2016-02-02 11:37:40',	'karen molina',	'sait',	'karen@sait.com',	'32132132');

DROP TABLE IF EXISTS `ordenes`;
CREATE TABLE `ordenes` (
  `idord` int(11) NOT NULL AUTO_INCREMENT,
  `idcont` int(11) NOT NULL,
  `fecha` datetime DEFAULT CURRENT_TIMESTAMP,
  `obs` text,
  `duracion` int(11) DEFAULT NULL,
  PRIMARY KEY (`idord`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `ordenes` (`idord`, `idcont`, `fecha`, `obs`, `duracion`) VALUES
(5,	15,	'2016-02-01 09:16:20',	'todo al cien',	15),
(6,	15,	'2016-02-01 09:16:41',	'todo al cien',	32),
(7,	15,	'2016-02-01 09:16:44',	'todo al cien',	43),
(8,	15,	'2016-02-01 09:16:48',	'todo al cien',	65),
(9,	15,	'2016-02-01 09:17:01',	'perfecto',	65),
(10,	15,	'2016-02-01 09:17:09',	'andamos bien',	65),
(11,	23,	'2016-02-01 09:22:46',	'andamos bien',	65),
(12,	23,	'2016-02-01 09:25:59',	'orden de alas',	65),
(21,	23,	'2016-02-01 09:33:00',	'actualizado correctamente otra vez',	65),
(22,	1,	'2016-02-01 15:43:56',	'ads',	0),
(23,	15,	'2016-02-01 15:44:57',	'perro',	20),
(24,	1,	'2016-02-01 15:48:53',	'Orden PC',	40),
(25,	20,	'2016-02-01 15:57:45',	'no hay ',	23),
(26,	55,	'2016-02-02 08:17:22',	'orden bien',	20),
(27,	1,	'2016-02-02 08:56:00',	'orden de pcs',	20),
(28,	1,	'2016-02-02 08:56:07',	'orden de teclados',	20),
(29,	15,	'2016-02-02 08:57:49',	'ordenes',	21),
(30,	59,	'2016-02-02 10:32:27',	'sad',	0),
(31,	66,	'2016-02-02 10:35:33',	'dasdas',	0),
(32,	66,	'2016-02-02 10:35:35',	'dasdas',	0),
(33,	66,	'2016-02-02 10:35:35',	'dasdas',	0),
(34,	65,	'2016-02-02 10:37:32',	'ewewq',	0),
(35,	65,	'2016-02-02 10:37:32',	'ewewq',	0),
(36,	65,	'2016-02-02 10:37:32',	'ewewq',	0),
(37,	65,	'2016-02-02 10:37:32',	'ewewq',	0),
(38,	65,	'2016-02-02 10:37:33',	'ewewq',	0),
(39,	65,	'2016-02-02 10:37:33',	'ewewq',	0),
(40,	15,	'2016-02-02 11:16:27',	'orden de impresoras',	50),
(41,	71,	'2016-02-02 11:17:26',	'orden de computadoras',	50),
(42,	70,	'2016-02-02 11:17:36',	'orden de mouses',	50),
(43,	78,	'2016-02-02 12:49:39',	'orden bien',	50);

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE `usuarios` (
  `iduser` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `mail` varchar(100) NOT NULL,
  `pswd` varchar(100) NOT NULL,
  PRIMARY KEY (`iduser`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `usuarios` (`iduser`, `name`, `mail`, `pswd`) VALUES
(1,	'admin',	'root@localhost',	'koko');

-- 2016-02-03 16:26:42