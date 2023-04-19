-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-04-2023 a las 18:52:16
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `api_fisioterapia`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `agendas`
--

CREATE TABLE `agendas` (
  `id` int(11) NOT NULL,
  `id_empresa` varchar(2) NOT NULL,
  `tipo_agenda` varchar(10) NOT NULL,
  `hora` time(6) NOT NULL,
  `fecha` date NOT NULL,
  `jornada` varchar(2) NOT NULL,
  `estado` varchar(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `agendas`
--

INSERT INTO `agendas` (`id`, `id_empresa`, `tipo_agenda`, `hora`, `fecha`, `jornada`, `estado`) VALUES
(1, '1', 'A1', '06:20:00.000000', '2023-04-17', 'AM', 'R'),
(2, '1', 'A1', '06:40:00.000000', '2023-04-18', 'AM', 'C');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `base_agendas`
--

CREATE TABLE `base_agendas` (
  `id` int(11) NOT NULL,
  `id_empresa` int(2) NOT NULL,
  `id_tipo_agenda` varchar(10) NOT NULL,
  `hora` time(6) NOT NULL,
  `jornada` varchar(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `base_agendas`
--

INSERT INTO `base_agendas` (`id`, `id_empresa`, `id_tipo_agenda`, `hora`, `jornada`) VALUES
(1, 1, 'A1', '06:00:00.000000', 'AM'),
(2, 1, 'A1', '06:20:00.000000', 'AM'),
(3, 1, 'A1', '06:40:00.000000', 'AM'),
(4, 1, 'A1', '07:00:00.000000', 'AM');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `agendas`
--
ALTER TABLE `agendas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `base_agendas`
--
ALTER TABLE `base_agendas`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `agendas`
--
ALTER TABLE `agendas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `base_agendas`
--
ALTER TABLE `base_agendas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
