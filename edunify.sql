-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Feb 03, 2024 at 01:53 PM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `edunify`
--

-- --------------------------------------------------------

--
-- Table structure for table `add_school_item`
--

CREATE TABLE `add_school_item` (
  `id` int NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `mobile` varchar(20) NOT NULL,
  `image` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `city` varchar(50) NOT NULL,
  `state` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `add_school_item`
--

INSERT INTO `add_school_item` (`id`, `name`, `email`, `mobile`, `image`, `address`, `city`, `state`) VALUES
(1, 'Mohan kumar', 'mohankumar@gmail.com', '897655548', 'bshvcwejhfweyhgewqydf', 'svwjhfgsduyfh', 'wdhvhvd', 'dvdyuahasdgdsyu'),
(2, 'Sohan kumar', 'sohankumar@gmail.com', '89908876', 'sdhvfhjfd', 'darbhanga', 'darbhanga', 'bihar'),
(17, 'Rajan kumar', 'rajankr@gmail.com', '95785469', 'sdjbskddf', 'Mudhubani', 'Mudhubani', 'bihar'),
(18, 'Arjun kumar', 'arjunkr@gmail.com', '8879998', 'sjfefdmsjsmdfhd', 'Ludhiana', 'ludhiana', 'panjab'),
(19, 'Aman Kumar', 'aman@gmail.com', '999885600', 'aajbsfh', 'Shadipur Delhi', 'New Delhi', 'Delhi');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `add_school_item`
--
ALTER TABLE `add_school_item`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `add_school_item`
--
ALTER TABLE `add_school_item`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
