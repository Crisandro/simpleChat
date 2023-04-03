-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 03, 2023 at 05:41 PM
-- Server version: 8.0.32
-- PHP Version: 7.4.3-4ubuntu2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db4free_sys`
--
CREATE DATABASE IF NOT EXISTS `db4free_sys` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `db4free_sys`;
--
-- Database: `foneapichat`
--
CREATE DATABASE IF NOT EXISTS `foneapichat` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `foneapichat`;

-- --------------------------------------------------------

--
-- Table structure for table `chat`
--

CREATE TABLE `chat` (
  `chat_id` int NOT NULL,
  `chat_message` varchar(500) DEFAULT NULL,
  `date_sent` timestamp NOT NULL,
  `firstuser_id` int NOT NULL,
  `seconduser_id` int NOT NULL,
  `view` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `chat`
--

INSERT INTO `chat` (`chat_id`, `chat_message`, `date_sent`, `firstuser_id`, `seconduser_id`, `view`) VALUES
(22, 'Hello !', '2023-03-24 14:06:53', 5, 6, NULL),
(23, 'Testing chat', '2023-03-24 14:06:56', 5, 6, NULL),
(26, 'populating chat', '2023-03-26 19:13:59', 5, 6, NULL),
(27, 'more ', '2023-03-26 19:14:04', 5, 6, NULL),
(28, 'adding more ', '2023-03-26 19:14:12', 5, 6, NULL),
(29, 'adding more ', '2023-03-26 19:14:14', 5, 6, NULL),
(30, 'adding more ', '2023-03-26 19:14:16', 5, 6, NULL),
(31, 'adding', '2023-03-27 16:47:46', 5, 6, NULL),
(32, 'add', '2023-03-27 16:54:46', 5, 6, NULL),
(33, 'order by desc', '2023-03-27 16:58:25', 5, 6, NULL),
(36, 'Hi', '2023-03-27 19:46:29', 5, 8, NULL),
(37, 'hi from sandro', '2023-03-27 19:48:09', 5, 6, NULL),
(38, 'From sandro', '2023-03-27 19:49:28', 5, 8, NULL),
(39, 'From Olive', '2023-03-27 20:13:21', 8, 5, NULL),
(40, 'Hello from olive', '2023-03-27 21:07:47', 8, 6, NULL),
(41, 'test', '2023-03-27 21:08:43', 8, 5, NULL),
(42, 'test from olive', '2023-03-27 21:09:42', 8, 6, NULL),
(43, 'asa', '2023-03-29 21:01:02', 7, 8, NULL),
(44, 'sdwa', '2023-03-29 21:01:02', 7, 6, NULL),
(45, 'asd', '2023-03-29 21:01:03', 7, 8, NULL),
(46, 'dwad', '2023-03-29 21:01:04', 7, 6, NULL),
(47, 'Hey', '2023-03-29 21:02:12', 7, 5, NULL),
(48, 'Hey system', '2023-03-29 21:05:13', 7, 6, NULL),
(49, 'Hey Karen', '2023-03-29 22:46:55', 5, 10, NULL),
(50, 'Hi, from karen', '2023-03-29 22:53:38', 10, 6, NULL),
(51, 'Hi hugo, sandro here', '2023-03-30 15:36:22', 5, 7, NULL),
(52, 'sending sample message', '2023-03-31 13:54:30', 5, 6, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `username` varchar(20) DEFAULT NULL,
  `password` varchar(200) DEFAULT NULL,
  `firstname` varchar(50) DEFAULT NULL,
  `lastname` varchar(50) DEFAULT NULL,
  `contacts` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `firstname`, `lastname`, `contacts`) VALUES
(5, 'sandro', '$2b$10$yAzXEaw4B5wgNWrhbqEP4.kFCsAhfprap0u.Qi25FCPLaSr45tdWe', 'Crisandro', 'Basoy', ',6,8,7,10,7,6'),
(6, 'admin', '$2b$10$fS.2SiXLLjguKkpf.5hn6uv7HyNiJGW2FVR2qQL2vC.W66u4azWaW', 'System', 'Admin', ',5,8,10,5'),
(7, 'hugof', '$2b$10$axnBvHgOna5VPEKGPXvH5uH3DXfGUjyn89GDMlgupRgUAwX4ahUzG', 'Hugo', 'First', ',6,8,5,5'),
(8, 'olivet', '$2b$10$FSs7wiyxKhWvVHtuiV.PI.LI1QPcoqgrW/koQ.AyObFy.ZWLhHL/2', 'Olive', 'Tree', ',5,6'),
(9, 'bridgetT', '$2b$10$YGDd/.Y6pYfYy4JK34XoyuQG0sAVzunCfQAhjc6VXQioyptjjGEie', 'Bridget ', 'Theriveaquai', ''),
(10, 'karenO', '$2b$10$cLc.KBUxpLve5kaOYDrMq.W2Ci.U/9xXPh0knJkL4uVQexwWFaEYW', 'Karen ', 'Onnabit', ',5,6');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `chat`
--
ALTER TABLE `chat`
  ADD PRIMARY KEY (`chat_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `chat`
--
ALTER TABLE `chat`
  MODIFY `chat_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
