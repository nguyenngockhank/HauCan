-- phpMyAdmin SQL Dump
-- version 4.3.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jul 24, 2015 at 03:10 PM
-- Server version: 5.6.24
-- PHP Version: 5.5.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `haucan`
--

-- --------------------------------------------------------

--
-- Table structure for table `calendar`
--

CREATE TABLE IF NOT EXISTS `calendar` (
  `id` int(11) NOT NULL,
  `ngay` date NOT NULL,
  `buoi` tinyint(2) NOT NULL,
  `created_time` datetime NOT NULL,
  `updated_time` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `lichan`
--

CREATE TABLE IF NOT EXISTS `lichan` (
  `id` int(11) NOT NULL,
  `ngay` date NOT NULL,
  `buoi` smallint(1) NOT NULL,
  `created_time` datetime DEFAULT NULL,
  `updated_time` datetime DEFAULT NULL,
  `deleted_time` datetime DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=181 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `lichan`
--

INSERT INTO `lichan` (`id`, `ngay`, `buoi`, `created_time`, `updated_time`, `deleted_time`) VALUES
(1, '2015-01-01', 0, NULL, NULL, NULL),
(2, '2015-01-01', 1, NULL, NULL, NULL),
(3, '2015-01-01', 2, NULL, NULL, NULL),
(4, '2015-01-02', 0, NULL, NULL, NULL),
(5, '2015-01-02', 1, NULL, NULL, NULL),
(6, '2015-01-02', 2, NULL, NULL, NULL),
(7, '2015-01-03', 0, NULL, NULL, NULL),
(8, '2015-01-03', 1, NULL, NULL, NULL),
(9, '2015-01-03', 2, NULL, NULL, NULL),
(10, '2015-01-04', 0, NULL, NULL, NULL),
(11, '2015-01-04', 1, NULL, NULL, NULL),
(12, '2015-01-04', 2, NULL, NULL, NULL),
(13, '2015-01-05', 0, NULL, NULL, NULL),
(14, '2015-01-05', 1, NULL, NULL, NULL),
(15, '2015-01-05', 2, NULL, NULL, NULL),
(16, '2015-01-06', 0, NULL, NULL, NULL),
(17, '2015-01-06', 1, NULL, NULL, NULL),
(18, '2015-01-06', 2, NULL, NULL, NULL),
(19, '2015-01-07', 0, NULL, NULL, NULL),
(20, '2015-01-07', 1, NULL, NULL, NULL),
(21, '2015-01-07', 2, NULL, NULL, NULL),
(22, '2015-01-08', 0, NULL, NULL, NULL),
(23, '2015-01-08', 1, NULL, NULL, NULL),
(24, '2015-01-08', 2, NULL, NULL, NULL),
(25, '2015-01-09', 0, NULL, NULL, NULL),
(26, '2015-01-09', 1, NULL, NULL, NULL),
(27, '2015-01-09', 2, NULL, NULL, NULL),
(28, '2015-01-10', 0, NULL, NULL, NULL),
(29, '2015-01-10', 1, NULL, NULL, NULL),
(30, '2015-01-10', 2, NULL, NULL, NULL),
(31, '2015-01-11', 0, NULL, NULL, NULL),
(32, '2015-01-11', 1, NULL, NULL, NULL),
(33, '2015-01-11', 2, NULL, NULL, NULL),
(34, '2015-01-12', 0, NULL, NULL, NULL),
(35, '2015-01-12', 1, NULL, NULL, NULL),
(36, '2015-01-12', 2, NULL, NULL, NULL),
(37, '2015-01-13', 0, NULL, NULL, NULL),
(38, '2015-01-13', 1, NULL, NULL, NULL),
(39, '2015-01-13', 2, NULL, NULL, NULL),
(40, '2015-01-14', 0, NULL, NULL, NULL),
(41, '2015-01-14', 1, NULL, NULL, NULL),
(42, '2015-01-14', 2, NULL, NULL, NULL),
(43, '2015-01-15', 0, NULL, NULL, NULL),
(44, '2015-01-15', 1, NULL, NULL, NULL),
(45, '2015-01-15', 2, NULL, NULL, NULL),
(46, '2015-01-16', 0, NULL, NULL, NULL),
(47, '2015-01-16', 1, NULL, NULL, NULL),
(48, '2015-01-16', 2, NULL, NULL, NULL),
(49, '2015-01-17', 0, NULL, NULL, NULL),
(50, '2015-01-17', 1, NULL, NULL, NULL),
(51, '2015-01-17', 2, NULL, NULL, NULL),
(52, '2015-01-18', 0, NULL, NULL, NULL),
(53, '2015-01-18', 1, NULL, NULL, NULL),
(54, '2015-01-18', 2, NULL, NULL, NULL),
(55, '2015-01-19', 0, NULL, NULL, NULL),
(56, '2015-01-19', 1, NULL, NULL, NULL),
(57, '2015-01-19', 2, NULL, NULL, NULL),
(58, '2015-01-20', 0, NULL, NULL, NULL),
(59, '2015-01-20', 1, NULL, NULL, NULL),
(60, '2015-01-20', 2, NULL, NULL, NULL),
(61, '2015-01-21', 0, NULL, NULL, NULL),
(62, '2015-01-21', 1, NULL, NULL, NULL),
(63, '2015-01-21', 2, NULL, NULL, NULL),
(64, '2015-01-22', 0, NULL, NULL, NULL),
(65, '2015-01-22', 1, NULL, NULL, NULL),
(66, '2015-01-22', 2, NULL, NULL, NULL),
(67, '2015-01-23', 0, NULL, NULL, NULL),
(68, '2015-01-23', 1, NULL, NULL, NULL),
(69, '2015-01-23', 2, NULL, NULL, NULL),
(70, '2015-01-24', 0, NULL, NULL, NULL),
(71, '2015-01-24', 1, NULL, NULL, NULL),
(72, '2015-01-24', 2, NULL, NULL, NULL),
(73, '2015-01-25', 0, NULL, NULL, NULL),
(74, '2015-01-25', 1, NULL, NULL, NULL),
(75, '2015-01-25', 2, NULL, NULL, NULL),
(76, '2015-01-26', 0, NULL, NULL, NULL),
(77, '2015-01-26', 1, NULL, NULL, NULL),
(78, '2015-01-26', 2, NULL, NULL, NULL),
(79, '2015-01-27', 0, NULL, NULL, NULL),
(80, '2015-01-27', 1, NULL, NULL, NULL),
(81, '2015-01-27', 2, NULL, NULL, NULL),
(82, '2015-01-28', 0, NULL, NULL, NULL),
(83, '2015-01-28', 1, NULL, NULL, NULL),
(84, '2015-01-28', 2, NULL, NULL, NULL),
(85, '2015-01-29', 0, NULL, NULL, NULL),
(86, '2015-01-29', 1, NULL, NULL, NULL),
(87, '2015-01-29', 2, NULL, NULL, NULL),
(88, '2015-01-30', 0, NULL, NULL, NULL),
(89, '2015-01-30', 1, NULL, NULL, NULL),
(90, '2015-01-30', 2, NULL, NULL, NULL),
(91, '2015-07-01', 0, NULL, NULL, NULL),
(92, '2015-07-01', 1, NULL, NULL, NULL),
(93, '2015-07-01', 2, NULL, NULL, NULL),
(94, '2015-07-02', 0, NULL, NULL, NULL),
(95, '2015-07-02', 1, NULL, NULL, NULL),
(96, '2015-07-02', 2, NULL, NULL, NULL),
(97, '2015-07-03', 0, NULL, NULL, NULL),
(98, '2015-07-03', 1, NULL, NULL, NULL),
(99, '2015-07-03', 2, NULL, NULL, NULL),
(100, '2015-07-04', 0, NULL, NULL, NULL),
(101, '2015-07-04', 1, NULL, NULL, NULL),
(102, '2015-07-04', 2, NULL, NULL, NULL),
(103, '2015-07-05', 0, NULL, NULL, NULL),
(104, '2015-07-05', 1, NULL, NULL, NULL),
(105, '2015-07-05', 2, NULL, NULL, NULL),
(106, '2015-07-06', 0, NULL, NULL, NULL),
(107, '2015-07-06', 1, NULL, NULL, NULL),
(108, '2015-07-06', 2, NULL, NULL, NULL),
(109, '2015-07-07', 0, NULL, NULL, NULL),
(110, '2015-07-07', 1, NULL, NULL, NULL),
(111, '2015-07-07', 2, NULL, NULL, NULL),
(112, '2015-07-08', 0, NULL, NULL, NULL),
(113, '2015-07-08', 1, NULL, NULL, NULL),
(114, '2015-07-08', 2, NULL, NULL, NULL),
(115, '2015-07-09', 0, NULL, NULL, NULL),
(116, '2015-07-09', 1, NULL, NULL, NULL),
(117, '2015-07-09', 2, NULL, NULL, NULL),
(118, '2015-07-10', 0, NULL, NULL, NULL),
(119, '2015-07-10', 1, NULL, NULL, NULL),
(120, '2015-07-10', 2, NULL, NULL, NULL),
(121, '2015-07-11', 0, NULL, NULL, NULL),
(122, '2015-07-11', 1, NULL, NULL, NULL),
(123, '2015-07-11', 2, NULL, NULL, NULL),
(124, '2015-07-12', 0, NULL, NULL, NULL),
(125, '2015-07-12', 1, NULL, NULL, NULL),
(126, '2015-07-12', 2, NULL, NULL, NULL),
(127, '2015-07-13', 0, NULL, NULL, NULL),
(128, '2015-07-13', 1, NULL, NULL, NULL),
(129, '2015-07-13', 2, NULL, NULL, NULL),
(130, '2015-07-14', 0, NULL, NULL, NULL),
(131, '2015-07-14', 1, NULL, NULL, NULL),
(132, '2015-07-14', 2, NULL, NULL, NULL),
(133, '2015-07-15', 0, NULL, NULL, NULL),
(134, '2015-07-15', 1, NULL, NULL, NULL),
(135, '2015-07-15', 2, NULL, NULL, NULL),
(136, '2015-07-16', 0, NULL, NULL, NULL),
(137, '2015-07-16', 1, NULL, NULL, NULL),
(138, '2015-07-16', 2, NULL, NULL, NULL),
(139, '2015-07-17', 0, NULL, NULL, NULL),
(140, '2015-07-17', 1, NULL, NULL, NULL),
(141, '2015-07-17', 2, NULL, NULL, NULL),
(142, '2015-07-18', 0, NULL, NULL, NULL),
(143, '2015-07-18', 1, NULL, NULL, NULL),
(144, '2015-07-18', 2, NULL, NULL, NULL),
(145, '2015-07-19', 0, NULL, NULL, NULL),
(146, '2015-07-19', 1, NULL, NULL, NULL),
(147, '2015-07-19', 2, NULL, NULL, NULL),
(148, '2015-07-20', 0, NULL, NULL, NULL),
(149, '2015-07-20', 1, NULL, NULL, NULL),
(150, '2015-07-20', 2, NULL, NULL, NULL),
(151, '2015-07-21', 0, NULL, NULL, NULL),
(152, '2015-07-21', 1, NULL, NULL, NULL),
(153, '2015-07-21', 2, NULL, NULL, NULL),
(154, '2015-07-22', 0, NULL, NULL, NULL),
(155, '2015-07-22', 1, NULL, NULL, NULL),
(156, '2015-07-22', 2, NULL, NULL, NULL),
(157, '2015-07-23', 0, NULL, NULL, NULL),
(158, '2015-07-23', 1, NULL, NULL, NULL),
(159, '2015-07-23', 2, NULL, NULL, NULL),
(160, '2015-07-24', 0, NULL, NULL, NULL),
(161, '2015-07-24', 1, NULL, NULL, NULL),
(162, '2015-07-24', 2, NULL, NULL, NULL),
(163, '2015-07-25', 0, NULL, NULL, NULL),
(164, '2015-07-25', 1, NULL, NULL, NULL),
(165, '2015-07-25', 2, NULL, NULL, NULL),
(166, '2015-07-26', 0, NULL, NULL, NULL),
(167, '2015-07-26', 1, NULL, NULL, NULL),
(168, '2015-07-26', 2, NULL, NULL, NULL),
(169, '2015-07-27', 0, NULL, NULL, NULL),
(170, '2015-07-27', 1, NULL, NULL, NULL),
(171, '2015-07-27', 2, NULL, NULL, NULL),
(172, '2015-07-28', 0, NULL, NULL, NULL),
(173, '2015-07-28', 1, NULL, NULL, NULL),
(174, '2015-07-28', 2, NULL, NULL, NULL),
(175, '2015-07-29', 0, NULL, NULL, NULL),
(176, '2015-07-29', 1, NULL, NULL, NULL),
(177, '2015-07-29', 2, NULL, NULL, NULL),
(178, '2015-07-30', 0, NULL, NULL, NULL),
(179, '2015-07-30', 1, NULL, NULL, NULL),
(180, '2015-07-30', 2, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `monan`
--

CREATE TABLE IF NOT EXISTS `monan` (
  `id` int(11) NOT NULL,
  `ten` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `created_time` datetime DEFAULT NULL,
  `updated_time` datetime DEFAULT NULL,
  `deleted_time` datetime DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `monan`
--

INSERT INTO `monan` (`id`, `ten`, `created_time`, `updated_time`, `deleted_time`) VALUES
(1, 'Thịt kho măng', '2015-07-18 00:00:00', '2015-07-23 09:37:02', NULL),
(2, 'Trứng chiên cà chua', '2015-07-17 00:00:00', '2015-07-23 09:30:37', NULL),
(3, 'Canh rau dền, ruốc', '2015-07-18 14:39:55', '2015-07-23 09:38:26', NULL),
(14, 'Cá nục kho thơm', '2015-07-19 04:50:01', '2015-07-23 09:41:33', NULL),
(16, 'Mì tôm trứng', '2015-07-20 12:19:51', '2015-07-23 09:35:19', NULL),
(17, 'Bánh canh', '2015-07-23 09:45:00', '2015-07-23 09:45:00', NULL),
(18, 'Bánh canh', '2015-07-23 09:46:40', '2015-07-23 09:49:50', '2015-07-23 09:49:50'),
(19, 'Thịt ba chỉ kho tiêu', '2015-07-23 09:50:56', '2015-07-23 10:09:57', NULL),
(20, 'Thịt heo xào giá, hẹ', '2015-07-23 09:53:29', '2015-07-23 09:53:29', NULL),
(21, 'Thịt kho đậu hũ', '2015-07-23 09:58:19', '2015-07-23 09:58:19', NULL),
(22, 'Cá bạc má chiên', '2015-07-23 10:00:11', '2015-07-23 10:00:11', NULL),
(23, 'Thịt kho cải chua', '2015-07-23 10:02:05', '2015-07-23 10:02:05', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `monan_thucpham`
--

CREATE TABLE IF NOT EXISTS `monan_thucpham` (
  `monan_id` int(11) NOT NULL,
  `thucpham_id` int(11) NOT NULL,
  `created_time` datetime DEFAULT NULL,
  `updated_time` datetime DEFAULT NULL,
  `deleted_time` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `monan_thucpham`
--

INSERT INTO `monan_thucpham` (`monan_id`, `thucpham_id`, `created_time`, `updated_time`, `deleted_time`) VALUES
(1, 1, '2015-07-18 08:17:38', '2015-07-18 08:17:38', NULL),
(1, 9, '2015-07-18 08:17:38', '2015-07-18 08:17:38', NULL),
(1, 197, '2015-07-23 09:29:49', '2015-07-23 09:29:49', NULL),
(1, 253, '2015-07-23 09:29:49', '2015-07-23 09:29:49', NULL),
(2, 177, '2015-07-23 09:30:37', '2015-07-23 09:30:37', NULL),
(2, 198, '2015-07-23 09:30:37', '2015-07-23 09:30:37', NULL),
(3, 209, '2015-07-23 09:37:21', '2015-07-23 09:37:21', NULL),
(3, 215, '2015-07-23 09:38:26', '2015-07-23 09:38:26', NULL),
(14, 13, '2015-07-19 11:50:01', '2015-07-19 11:50:01', NULL),
(14, 14, '2015-07-19 11:50:01', '2015-07-19 11:50:01', NULL),
(14, 216, '2015-07-23 09:41:33', '2015-07-23 09:41:33', NULL),
(14, 217, '2015-07-23 09:41:33', '2015-07-23 09:41:33', NULL),
(16, 7, '2015-07-20 19:19:51', '2015-07-20 19:19:51', NULL),
(16, 8, '2015-07-20 19:19:51', '2015-07-20 19:19:51', NULL),
(16, 169, '2015-07-23 09:35:19', '2015-07-23 09:35:19', NULL),
(16, 198, '2015-07-23 09:35:19', '2015-07-23 09:35:19', NULL),
(19, 179, '2015-07-23 10:09:57', '2015-07-23 10:09:57', NULL),
(19, 197, '2015-07-23 16:50:56', '2015-07-23 16:50:56', NULL),
(19, 260, '2015-07-23 16:50:56', '2015-07-23 16:50:56', NULL),
(20, 171, '2015-07-23 16:53:29', '2015-07-23 16:53:29', NULL),
(20, 197, '2015-07-23 16:53:29', '2015-07-23 16:53:29', NULL),
(21, 179, '2015-07-23 16:58:19', '2015-07-23 16:58:19', NULL),
(21, 197, '2015-07-23 16:58:19', '2015-07-23 16:58:19', NULL),
(22, 175, '2015-07-23 17:00:11', '2015-07-23 17:00:11', NULL),
(23, 197, '2015-07-23 17:02:06', '2015-07-23 17:02:06', NULL),
(23, 202, '2015-07-23 17:02:06', '2015-07-23 17:02:06', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `thucdon`
--

CREATE TABLE IF NOT EXISTS `thucdon` (
  `id` int(11) NOT NULL,
  `lich_id` int(11) NOT NULL,
  `thucpham_id` int(11) DEFAULT NULL,
  `monan_id` int(11) DEFAULT NULL,
  `created_time` datetime DEFAULT NULL,
  `updated_time` datetime DEFAULT NULL,
  `deleted_time` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `thucpham`
--

CREATE TABLE IF NOT EXISTS `thucpham` (
  `id` int(11) NOT NULL,
  `ten` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `dongia` float NOT NULL,
  `donvi` varchar(20) NOT NULL,
  `created_time` datetime DEFAULT NULL,
  `updated_time` datetime DEFAULT NULL,
  `deleted_time` datetime DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=265 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `thucpham`
--

INSERT INTO `thucpham` (`id`, `ten`, `dongia`, `donvi`, `created_time`, `updated_time`, `deleted_time`) VALUES
(169, 'Mí gói', 3000, 'kg', '2015-07-23 15:42:30', '2015-07-23 15:52:20', NULL),
(170, 'Xương heo', 70000, 'kg', '2015-07-23 15:42:30', '2015-07-23 15:52:20', NULL),
(171, 'Giá', 10000, '', '2015-07-23 15:42:30', '2015-07-23 15:52:20', NULL),
(172, 'Nước tương', 14000, 'kg', '2015-07-23 15:42:30', '2015-07-23 15:52:20', NULL),
(173, 'Thịt vai heo', 90000, 'kg', '2015-07-23 15:42:30', '2015-07-23 15:52:20', NULL),
(174, 'Củ cải trắng', 12000, 'kg', '2015-07-23 15:42:30', '2015-07-23 15:52:20', NULL),
(175, 'Cá bạc má', 45000, 'kg', '2015-07-23 15:42:30', '2015-07-23 15:52:20', NULL),
(176, 'Cần đà lạt', 20000, 'kg', '2015-07-23 15:42:30', '2015-07-23 15:52:20', NULL),
(177, 'Cà chua', 14000, 'kg', '2015-07-23 15:42:30', '2015-07-23 15:52:20', NULL),
(178, 'Đậu que ', 15000, 'kg', '2015-07-23 15:42:30', '2015-07-23 15:52:20', NULL),
(179, 'Đậu hủ', 2500, 'kg', '2015-07-23 15:42:30', '2015-07-23 15:52:20', NULL),
(180, 'Cá phi ', 40000, 'kg', '2015-07-23 15:42:30', '2015-07-23 15:52:20', NULL),
(181, 'Cải ngọt ', 13000, 'kg', '2015-07-23 15:42:30', '2015-07-23 15:52:20', NULL),
(182, 'Thịt bằm', 85000, 'kg', '2015-07-23 15:42:30', '2015-07-23 15:52:20', NULL),
(183, 'Rau muống', 10000, 'kg', '2015-07-23 15:42:30', '2015-07-23 15:52:20', NULL),
(184, 'Muối bột', 6000, 'kg', '2015-07-23 15:42:30', '2015-07-23 15:52:20', NULL),
(185, 'Đường cát', 18000, 'kg', '2015-07-23 15:42:30', '2015-07-23 15:52:20', NULL),
(186, 'Bột Ngọt', 58000, 'kg', '2015-07-23 15:42:30', '2015-07-23 15:52:20', NULL),
(187, 'Nước mắm', 16000, 'lít', '2015-07-23 15:42:30', '2015-07-23 10:11:18', NULL),
(188, 'Tiêu bột', 280000, 'kg', '2015-07-23 15:42:30', '2015-07-23 15:52:20', NULL),
(189, 'Tỏi củ', 40000, 'kg', '2015-07-23 15:42:30', '2015-07-23 15:52:20', NULL),
(190, 'Ớt trái', 40000, 'kg', '2015-07-23 15:42:30', '2015-07-23 15:52:20', NULL),
(191, 'Hành lá', 23000, 'kg', '2015-07-23 15:42:30', '2015-07-23 15:52:20', NULL),
(192, 'Nước rửa chén', 16000, 'lít', '2015-07-23 15:42:30', '2015-07-23 10:11:32', NULL),
(193, 'Dầu ăn', 27000, 'kg', '2015-07-23 15:42:30', '2015-07-23 15:52:20', NULL),
(194, 'Rau nêm', 5000, 'kg', '2015-07-23 15:42:30', '2015-07-23 15:52:20', NULL),
(195, 'Gia vị', 10000, 'kg', '2015-07-23 15:42:30', '2015-07-23 10:16:18', NULL),
(196, 'Nước màu', 18000, 'lít', '2015-07-23 15:42:30', '2015-07-23 10:15:42', NULL),
(197, 'Thịt heo đùi', 90000, 'kg', '2015-07-23 15:42:30', '2015-07-23 15:52:20', NULL),
(198, 'Trứng', 2500, 'kg', '2015-07-23 15:42:30', '2015-07-23 15:52:20', NULL),
(199, 'Bắp cải ', 14000, 'kg', '2015-07-23 15:42:30', '2015-07-23 15:52:20', NULL),
(200, 'Đậu bắp ', 14000, 'kg', '2015-07-23 15:42:30', '2015-07-23 15:52:20', NULL),
(201, 'Mồng tơi', 13000, 'kg', '2015-07-23 15:42:30', '2015-07-23 15:52:20', NULL),
(202, 'Củ cải', 16000, 'kg', '2015-07-23 15:42:30', '2015-07-23 15:52:20', NULL),
(203, 'Khô cá mối ', 110000, 'kg', '2015-07-23 15:42:30', '2015-07-23 15:52:20', NULL),
(204, 'Khoai mỡ', 14000, 'kg', '2015-07-23 15:42:30', '2015-07-23 15:52:20', NULL),
(205, 'Cải chua', 16000, 'kg', '2015-07-23 15:42:30', '2015-07-23 15:52:20', NULL),
(206, 'Cá hường ', 45000, 'kg', '2015-07-23 15:42:30', '2015-07-23 15:52:20', NULL),
(207, 'Bạc hà', 16000, 'kg', '2015-07-23 15:42:30', '2015-07-23 15:52:20', NULL),
(208, 'Me', 30000, 'kg', '2015-07-23 15:42:30', '2015-07-23 15:52:20', NULL),
(209, 'Ruốc', 120000, 'kg', '2015-07-23 15:42:30', '2015-07-23 15:52:20', NULL),
(210, 'Chuối ', 11000, 'kg', '2015-07-23 15:42:30', '2015-07-23 15:52:20', NULL),
(211, 'Chả cá ', 90000, 'kg', '2015-07-23 15:42:30', '2015-07-23 15:52:20', NULL),
(212, 'Bầu', 12000, 'kg', '2015-07-23 15:42:30', '2015-07-23 15:52:20', NULL),
(213, 'Tương hột', 21000, 'kg', '2015-07-23 15:42:30', '2015-07-23 15:52:20', NULL),
(214, 'Nấm mèo', 180000, 'kg', '2015-07-23 15:42:30', '2015-07-23 15:52:20', NULL),
(215, 'Rau lang ', 10000, 'kg', '2015-07-23 15:42:30', '2015-07-23 15:52:20', NULL),
(216, 'Cá nục ', 45000, 'kg', '2015-07-23 15:42:30', '2015-07-23 15:52:20', NULL),
(217, 'Thơm', 7000, 'kg', '2015-07-23 15:42:30', '2015-07-23 15:52:20', NULL),
(218, 'Cải xanh ', 12000, '', '2015-07-23 15:42:30', '2015-07-23 15:52:20', NULL),
(219, 'Xâm đất', 14000, '', '2015-07-23 15:42:30', '2015-07-23 15:52:20', NULL),
(220, 'Chôm chôm ', 14000, 'kg', '2015-07-23 15:42:30', '2015-07-23 15:52:20', NULL),
(253, 'Măng', 21000, 'kg', '2015-07-23 15:52:20', '2015-07-23 15:52:20', NULL),
(254, 'Cá diêu hồng ', 47000, 'kg', '2015-07-23 15:52:20', '2015-07-23 15:52:20', NULL),
(255, 'Cà trắng ', 14000, 'kg', '2015-07-23 15:52:20', '2015-07-23 15:52:20', NULL),
(256, 'Cá trê ', 45000, 'kg', '2015-07-23 15:52:20', '2015-07-23 15:52:20', NULL),
(257, 'Bí đỏ', 15000, 'kg', '2015-07-23 15:52:20', '2015-07-23 15:52:20', NULL),
(258, 'Muối', 6000, 'kg', '2015-07-23 15:52:20', '2015-07-23 15:52:20', NULL),
(259, 'Đường', 19000, 'kg', '2015-07-23 15:52:20', '2015-07-23 15:52:20', NULL),
(260, 'Tiêu', 300000, 'kg', '2015-07-23 15:52:20', '2015-07-23 15:52:20', NULL),
(261, 'Tỏi', 40000, 'kg', '2015-07-23 15:52:20', '2015-07-23 15:52:20', NULL),
(262, 'Ớt', 40000, 'kg', '2015-07-23 15:52:20', '2015-07-23 15:52:20', NULL),
(263, 'Hành', 40000, 'kg', '2015-07-23 15:52:20', '2015-07-23 15:52:20', NULL),
(264, 'Thanh Long', 14000, 'kg', '2015-07-23 15:52:20', '2015-07-23 10:10:33', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `calendar`
--
ALTER TABLE `calendar`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `lichan`
--
ALTER TABLE `lichan`
  ADD PRIMARY KEY (`id`), ADD UNIQUE KEY `ngay` (`ngay`,`buoi`);

--
-- Indexes for table `monan`
--
ALTER TABLE `monan`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `monan_thucpham`
--
ALTER TABLE `monan_thucpham`
  ADD PRIMARY KEY (`monan_id`,`thucpham_id`);

--
-- Indexes for table `thucdon`
--
ALTER TABLE `thucdon`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `thucpham`
--
ALTER TABLE `thucpham`
  ADD PRIMARY KEY (`id`), ADD UNIQUE KEY `ten` (`ten`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `calendar`
--
ALTER TABLE `calendar`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `lichan`
--
ALTER TABLE `lichan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=181;
--
-- AUTO_INCREMENT for table `monan`
--
ALTER TABLE `monan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=24;
--
-- AUTO_INCREMENT for table `thucdon`
--
ALTER TABLE `thucdon`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `thucpham`
--
ALTER TABLE `thucpham`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=265;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
