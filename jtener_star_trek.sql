CREATE DATABASE  IF NOT EXISTS `star_trek` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `star_trek`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: star_trek
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `captain_log_data`
--

DROP TABLE IF EXISTS `captain_log_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `captain_log_data` (
  `captain_id` int NOT NULL,
  `star_date` decimal(6,1) NOT NULL,
  `message` varchar(3000) NOT NULL,
  PRIMARY KEY (`captain_id`,`star_date`),
  KEY `captain_id` (`captain_id`),
  CONSTRAINT `captain_log_data_ibfk_1` FOREIGN KEY (`captain_id`) REFERENCES `personnel` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `captain_log_data`
--

LOCK TABLES `captain_log_data` WRITE;
/*!40000 ALTER TABLE `captain_log_data` DISABLE KEYS */;
/*!40000 ALTER TABLE `captain_log_data` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personnel`
--

DROP TABLE IF EXISTS `personnel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `personnel` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `gender` char(1) NOT NULL,
  `species` varchar(45) NOT NULL,
  `affiliation` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=102 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personnel`
--

LOCK TABLES `personnel` WRITE;
/*!40000 ALTER TABLE `personnel` DISABLE KEYS */;
/*!40000 ALTER TABLE `personnel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personnel_occupation`
--

DROP TABLE IF EXISTS `personnel_occupation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `personnel_occupation` (
  `personnel_id` int NOT NULL,
  `occupation` varchar(45) NOT NULL,
  `date_assigned` decimal(6,1) NOT NULL,
  `date_dropped` decimal(6,1) DEFAULT NULL,
  PRIMARY KEY (`personnel_id`,`date_assigned`),
  CONSTRAINT `personnel_occupation_ibfk_1` FOREIGN KEY (`personnel_id`) REFERENCES `personnel` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personnel_occupation`
--

LOCK TABLES `personnel_occupation` WRITE;
/*!40000 ALTER TABLE `personnel_occupation` DISABLE KEYS */;
/*!40000 ALTER TABLE `personnel_occupation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personnel_rank`
--

DROP TABLE IF EXISTS `personnel_rank`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `personnel_rank` (
  `personnel_id` int NOT NULL,
  `rank_id` int NOT NULL,
  `date_assigned` decimal(6,1) NOT NULL,
  `date_dropped` decimal(6,1) DEFAULT NULL,
  PRIMARY KEY (`personnel_id`,`date_assigned`),
  KEY `rank_id` (`rank_id`),
  CONSTRAINT `personnel_rank_ibfk_1` FOREIGN KEY (`personnel_id`) REFERENCES `personnel` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `personnel_rank_ibfk_2` FOREIGN KEY (`rank_id`) REFERENCES `rank_type` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personnel_rank`
--

LOCK TABLES `personnel_rank` WRITE;
/*!40000 ALTER TABLE `personnel_rank` DISABLE KEYS */;
/*!40000 ALTER TABLE `personnel_rank` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personnel_status`
--

DROP TABLE IF EXISTS `personnel_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `personnel_status` (
  `personnel_id` int NOT NULL,
  `status` varchar(10) NOT NULL,
  `date_assigned` decimal(6,1) NOT NULL,
  `date_dropped` decimal(6,1) DEFAULT NULL,
  PRIMARY KEY (`personnel_id`,`date_assigned`),
  CONSTRAINT `personnel_status_ibfk_1` FOREIGN KEY (`personnel_id`) REFERENCES `personnel` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personnel_status`
--

LOCK TABLES `personnel_status` WRITE;
/*!40000 ALTER TABLE `personnel_status` DISABLE KEYS */;
/*!40000 ALTER TABLE `personnel_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rank_type`
--

DROP TABLE IF EXISTS `rank_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rank_type` (
  `id` int NOT NULL,
  `name` varchar(10) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rank_type`
--

LOCK TABLES `rank_type` WRITE;
/*!40000 ALTER TABLE `rank_type` DISABLE KEYS */;
/*!40000 ALTER TABLE `rank_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `starship_data`
--

DROP TABLE IF EXISTS `starship_data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `starship_data` (
  `registry` varchar(10) NOT NULL,
  `name` varchar(45) NOT NULL,
  `class` varchar(45) NOT NULL,
  PRIMARY KEY (`registry`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `starship_data`
--

LOCK TABLES `starship_data` WRITE;
/*!40000 ALTER TABLE `starship_data` DISABLE KEYS */;
/*!40000 ALTER TABLE `starship_data` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `starship_operator`
--

DROP TABLE IF EXISTS `starship_operator`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `starship_operator` (
  `starship_reg` varchar(10) NOT NULL,
  `personnel_id` int NOT NULL,
  `date_start` decimal(6,1) NOT NULL,
  `date_end` decimal(6,1) DEFAULT NULL,
  PRIMARY KEY (`starship_reg`,`personnel_id`,`date_start`),
  KEY `starship_reg` (`starship_reg`),
  KEY `starship_operator_ibfk_2` (`personnel_id`),
  CONSTRAINT `starship_operator_ibfk_1` FOREIGN KEY (`starship_reg`) REFERENCES `starship_data` (`registry`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `starship_operator_ibfk_2` FOREIGN KEY (`personnel_id`) REFERENCES `personnel` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `starship_operator`
--

LOCK TABLES `starship_operator` WRITE;
/*!40000 ALTER TABLE `starship_operator` DISABLE KEYS */;
/*!40000 ALTER TABLE `starship_operator` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `starship_owner`
--

DROP TABLE IF EXISTS `starship_owner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `starship_owner` (
  `starship_reg` varchar(10) NOT NULL,
  `personnel_id` int NOT NULL,
  `date_start` decimal(6,1) NOT NULL,
  `date_end` decimal(6,1) DEFAULT NULL,
  PRIMARY KEY (`starship_reg`,`personnel_id`,`date_start`),
  KEY `starship_reg` (`starship_reg`),
  KEY `starship_owner_ibfk_2` (`personnel_id`),
  CONSTRAINT `starship_owner_ibfk_1` FOREIGN KEY (`starship_reg`) REFERENCES `starship_data` (`registry`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `starship_owner_ibfk_2` FOREIGN KEY (`personnel_id`) REFERENCES `personnel` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `starship_owner`
--

LOCK TABLES `starship_owner` WRITE;
/*!40000 ALTER TABLE `starship_owner` DISABLE KEYS */;
/*!40000 ALTER TABLE `starship_owner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `starship_roster`
--

DROP TABLE IF EXISTS `starship_roster`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `starship_roster` (
  `starship_reg` varchar(10) NOT NULL,
  `personnel_id` int NOT NULL,
  `date_start` decimal(6,1) NOT NULL,
  `date_end` decimal(6,1) DEFAULT NULL,
  `reason` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`starship_reg`,`personnel_id`,`date_start`),
  KEY `starship_roster_ibfk_2_idx` (`personnel_id`),
  CONSTRAINT `starship_roster_ibfk_1` FOREIGN KEY (`starship_reg`) REFERENCES `starship_data` (`registry`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `starship_roster_ibfk_2` FOREIGN KEY (`personnel_id`) REFERENCES `personnel` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `starship_roster`
--

LOCK TABLES `starship_roster` WRITE;
/*!40000 ALTER TABLE `starship_roster` DISABLE KEYS */;
/*!40000 ALTER TABLE `starship_roster` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `starship_status`
--

DROP TABLE IF EXISTS `starship_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `starship_status` (
  `starship_reg` varchar(10) NOT NULL,
  `personnel_id` int NOT NULL,
  `status` varchar(45) NOT NULL,
  `date_start` decimal(6,1) NOT NULL,
  `date_end` decimal(6,1) DEFAULT NULL,
  PRIMARY KEY (`starship_reg`,`personnel_id`,`date_start`),
  KEY `starship_reg` (`starship_reg`),
  KEY `starship_status_ibfk_2` (`personnel_id`),
  CONSTRAINT `starship_status_ibfk_1` FOREIGN KEY (`starship_reg`) REFERENCES `starship_data` (`registry`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `starship_status_ibfk_2` FOREIGN KEY (`personnel_id`) REFERENCES `personnel` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `starship_status`
--

LOCK TABLES `starship_status` WRITE;
/*!40000 ALTER TABLE `starship_status` DISABLE KEYS */;
/*!40000 ALTER TABLE `starship_status` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-31 16:15:43
