-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-08-2016 a las 06:23:04
-- Versión del servidor: 10.1.9-MariaDB
-- Versión de PHP: 5.6.15
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";
CREATE DATABASE drawing;
USE drawing;


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `drawing`
--

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `buscarUsuario` (IN `unserIn` VARCHAR(45))  NO SQL
SELECT * FROM usuario WHERE usuario=unserIn$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `datosUser` (IN `userIn` VARCHAR(45))  NO SQL
SELECT * FROM usuario WHERE usuario=userIn$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `loginIN` (IN `unserIn` VARCHAR(45), IN `passIn` VARCHAR(35))  SELECT * FROM usuario WHERE usuario=unserIn AND contrasena=passIn$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `archivos`
--

CREATE TABLE `archivos` (
  `archivos` varchar(45) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `url` varchar(10000) DEFAULT NULL,
  `carpeta` varchar(50) DEFAULT NULL,
  `usuario` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `usuario` varchar(45) NOT NULL,
  `correo` varchar(45) DEFAULT NULL,
  `contrasena` varchar(35) NOT NULL,
  `nombre` varchar(30) DEFAULT NULL,
  `apellido` varchar(100) DEFAULT NULL,
  `imagen` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`usuario`, `correo`, `contrasena`, `nombre`, `apellido`, `imagen`) VALUES
('snd.yvv', 'snd.yvv@gmail.com', 'hola', 'Yordanch', 'Vargas Velasque', 'elsa.jpg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `archivos`
--
ALTER TABLE `archivos`
  ADD PRIMARY KEY (`archivos`),
  ADD KEY `fk_archivos_usuario_idx` (`usuario`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`usuario`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `archivos`
--
ALTER TABLE `archivos`
  ADD CONSTRAINT `fk_archivos_usuario` FOREIGN KEY (`usuario`) REFERENCES `usuario` (`usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
