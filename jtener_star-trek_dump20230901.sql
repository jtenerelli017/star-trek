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
INSERT INTO `captain_log_data` VALUES (19,16000.0,'We are currently on a mission to explore a newly discovered star system. The crew is in high spirits, and our science team is eager to gather data on the unique phenomena in this region of space. I am confident that this mission will yield valuable insights into the unknown. Our journey continues, and we remain committed to Starfleet\'s mission of exploration and discovery.'),(26,16500.0,'The USS Enterprise continues its journey through uncharted space. Our mission is to seek out new life and new civilizations, and we have encountered a previously unknown species of intelligent beings. They appear to be friendly, and we are establishing diplomatic contact to learn more about their culture and technology. The crew is performing admirably, and I have every confidence in our ability to represent the Federation with honor and integrity.');
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
) ENGINE=InnoDB AUTO_INCREMENT=134 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personnel`
--

LOCK TABLES `personnel` WRITE;
/*!40000 ALTER TABLE `personnel` DISABLE KEYS */;
INSERT INTO `personnel` VALUES (1,'Amelia','Carter','F','Human','Starfleet'),(2,'Kieran','Sato','M','Vulcan','Starfleet'),(3,'Elara','T\'Kara','F','Andorian','Starfleet'),(4,'Liam','Patel','M','Bajoran','Bajoran Militia'),(5,'Isabella','Rios','F','Trill','Federation Diplomatic Corps'),(6,'Thaddeus','Quinn','M','Betazoid','Starfleet'),(7,'Serina','N\'Gara','F','Klingon','Klingon Defense Force'),(8,'Asha','Zia','F','Cardassian','Cardassian Union Science Academy'),(9,'Julian','Kwan','M','Human','Starfleet'),(10,'Eira','Voss','F','Romulan','Romulan Tal Shiar'),(11,'Nikolas','Kovač','M','Andorian','Federation Science Council'),(12,'Liara','Kestral','F','Bajoran','Vedek Assembly'),(13,'Solok','Xar','M','Vulcan','Vulcan Science Academy'),(14,'Amara','Shran','F','Andorian','Andorian Imperial Guard'),(15,'Mateo','Reyes','M','Human','Starfleet'),(16,'Talia','Surok','F','Vulcan','Vulcan High Command'),(17,'Jarek','Toran','M','Cardassian','Obsidian Order'),(18,'Liana','Eamon','F','Human','Starfleet'),(19,'Daxar','zh\'Kul','M','Klingon','Federation Archaeological Institute'),(20,'Tessa','Laris','F','Bajoran','Bajoran Vedek Assembly'),(21,'Jolan','Ral','M','Romulan','Romulan Senate'),(22,'Sabine','T\'Par','F','Vulcan','Starfleet'),(23,'Garin','Korr','M','Human','Starfleet'),(24,'Kaela','Nerys','F','Bajoran','Bajoran Militia'),(25,'Senir','Tal','M','Trill','Symbiosis Commission'),(26,'Isak','Damar','M','Cardassian','Cardassian Union Government'),(27,'Maris','Vren','F','Betazoid','Betazed Diplomatic Corps'),(28,'Thalor','t\'Khas','M','Romulan','Tal Shiar'),(29,'Miral','Kren','F','Klingon','Klingon Defense Force'),(30,'Devan','Vosk','M','Human','Starfleet');
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
  `date_modified` decimal(6,1) NOT NULL DEFAULT (`date_assigned`),
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
INSERT INTO `personnel_occupation` VALUES (1,'Captain',13000.0,13000.0,NULL),(2,'First Officer',13100.0,13100.0,NULL),(3,'Science Officer',13200.0,13200.0,NULL),(4,'Chief Medical Officer',13300.0,13300.0,NULL),(5,'Chief Engineer',13400.0,13400.0,NULL),(6,'Security Chief',13500.0,13500.0,NULL),(7,'Communications Officer',13600.0,13600.0,NULL),(8,'Helmsman',13700.0,13700.0,NULL),(9,'Tactical Officer',13800.0,13800.0,NULL),(10,'Medical Officer',13900.0,13900.0,NULL),(11,'First Officer',15000.0,15000.0,NULL),(12,'Science Officer',15100.0,15100.0,NULL),(13,'Chief Medical Officer',15200.0,15200.0,NULL),(14,'Chief Engineer',15300.0,15300.0,NULL),(15,'Security Chief',15400.0,15400.0,NULL),(16,'Communications Officer',15500.0,15500.0,NULL),(17,'Helmsman',15600.0,15600.0,NULL),(18,'Tactical Officer',15700.0,15700.0,NULL),(19,'Medical Officer',15800.0,15800.0,NULL),(20,'Retired',15030.0,15030.0,NULL),(21,'First Officer',16000.0,16000.0,NULL),(22,'Science Officer',16100.0,16100.0,NULL),(23,'Chief Medical Officer',16200.0,16200.0,NULL),(24,'Chief Engineer',16300.0,16300.0,NULL),(25,'Security Chief',16400.0,16400.0,NULL),(26,'Communications Officer',16500.0,16500.0,NULL),(27,'Helmsman',16600.0,16600.0,NULL),(28,'Tactical Officer',16700.0,16700.0,NULL),(29,'Medical Officer',16800.0,16800.0,NULL),(30,'First Officer',16900.0,16900.0,NULL);
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
  `date_modified` decimal(6,1) NOT NULL DEFAULT (`date_assigned`),
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
INSERT INTO `personnel_rank` VALUES (1,2,13000.0,13000.0,13010.0),(1,3,13010.0,13010.0,NULL),(2,2,13100.0,13100.0,13110.0),(2,3,13110.0,13110.0,NULL),(3,2,13200.0,13200.0,13210.0),(3,3,13210.0,13210.0,NULL),(4,2,13300.0,13300.0,13310.0),(4,3,13310.0,13310.0,NULL),(5,2,13400.0,13400.0,13410.0),(5,3,13410.0,13410.0,NULL),(6,2,13500.0,13500.0,13510.0),(6,3,13510.0,13510.0,NULL),(7,2,13600.0,13600.0,13610.0),(7,3,13610.0,13610.0,NULL),(8,2,13700.0,13700.0,13710.0),(8,3,13710.0,13710.0,NULL),(9,2,13800.0,13800.0,13810.0),(9,3,13810.0,13810.0,NULL),(10,2,13900.0,13900.0,13910.0),(10,3,13910.0,13910.0,NULL),(11,2,15000.0,15000.0,15010.0),(11,3,15010.0,15010.0,NULL),(12,2,15100.0,15100.0,15110.0),(12,3,15110.0,15110.0,15120.0),(12,4,15120.0,15120.0,NULL),(13,2,15200.0,15200.0,15210.0),(13,3,15210.0,15210.0,15220.0),(13,4,15220.0,15220.0,NULL),(14,2,15300.0,15300.0,15310.0),(14,3,15310.0,15310.0,15320.0),(14,4,15320.0,15320.0,NULL),(15,2,15400.0,15400.0,15410.0),(15,3,15410.0,15410.0,15420.0),(15,4,15420.0,15420.0,NULL),(16,2,15500.0,15500.0,15510.0),(16,3,15510.0,15510.0,15520.0),(16,4,15520.0,15520.0,NULL),(17,1,13700.0,13700.0,13710.0),(17,2,13710.0,13710.0,NULL),(18,2,13800.0,13800.0,13810.0),(18,3,13810.0,13810.0,13820.0),(18,4,13820.0,13820.0,NULL),(19,3,13900.0,13900.0,13910.0),(19,4,13910.0,13910.0,13920.0),(19,5,13920.0,13920.0,NULL),(20,2,14000.0,14000.0,14010.0),(20,3,14010.0,14010.0,NULL),(21,2,14100.0,14100.0,14110.0),(21,3,14110.0,14110.0,NULL),(22,2,14200.0,14200.0,14210.0),(22,3,14210.0,14210.0,NULL),(23,3,14300.0,14300.0,14310.0),(23,4,14310.0,14310.0,NULL),(24,2,14400.0,14400.0,14410.0),(24,3,14410.0,14410.0,NULL),(25,3,14500.0,14500.0,14510.0),(25,4,14510.0,14510.0,NULL),(26,5,14600.0,14600.0,NULL),(27,3,14700.0,14700.0,14710.0),(27,4,14710.0,14710.0,NULL),(28,3,14800.0,14800.0,14810.0),(28,4,14810.0,14810.0,NULL),(29,2,14900.0,14900.0,14910.0),(29,3,14910.0,14910.0,NULL),(30,3,15000.0,15000.0,15010.0),(30,4,15010.0,15010.0,NULL);
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
  `date_modified` decimal(6,1) NOT NULL DEFAULT (`date_assigned`),
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
INSERT INTO `personnel_status` VALUES (1,'Active',13000.0,13000.0,13010.0),(1,'Deceased',13711.0,13711.0,13711.0),(2,'Active',13100.0,13100.0,13110.0),(2,'Deceased',13111.0,13111.0,13111.0),(3,'Active',13200.0,13200.0,13210.0),(3,'Deceased',13211.0,13211.0,13211.0),(4,'Active',13300.0,13300.0,13310.0),(5,'Active',13400.0,13400.0,13410.0),(6,'Active',13500.0,13500.0,13510.0),(7,'Active',13600.0,13600.0,13610.0),(8,'Active',13700.0,13700.0,13710.0),(9,'Active',13800.0,13800.0,13810.0),(10,'Active',13900.0,13900.0,13910.0),(11,'Active',15000.0,15000.0,15010.0),(11,'Active',15010.0,15010.0,NULL),(11,'Deceased',15511.0,15511.0,15511.0),(12,'Active',15100.0,15100.0,15110.0),(12,'Active',15110.0,15110.0,15120.0),(12,'Deceased',15521.0,15521.0,15521.0),(13,'Active',15200.0,15200.0,15210.0),(13,'Active',15210.0,15210.0,15220.0),(13,'Deceased',15531.0,15531.0,15531.0),(14,'Active',15300.0,15300.0,15310.0),(14,'Active',15310.0,15310.0,15320.0),(14,'Deceased',15541.0,15541.0,15541.0),(15,'Active',15400.0,15400.0,15410.0),(15,'Active',15410.0,15410.0,15420.0),(15,'Deceased',15551.0,15551.0,15551.0),(16,'Active',15500.0,15500.0,15510.0),(16,'Active',15510.0,15510.0,15520.0),(16,'Deceased',15521.0,15521.0,15521.0),(17,'Active',13700.0,13700.0,13710.0),(18,'Active',13800.0,13800.0,13810.0),(19,'Active',13900.0,13900.0,13910.0),(20,'Active',14000.0,14000.0,14010.0),(21,'Active',14100.0,14100.0,14110.0),(22,'Active',14200.0,14200.0,14210.0),(23,'Active',14300.0,14300.0,14310.0),(24,'Active',14400.0,14400.0,14410.0),(25,'Active',14500.0,14500.0,14510.0),(26,'Active',14600.0,14600.0,NULL),(27,'Active',14700.0,14700.0,14710.0),(28,'Active',14800.0,14800.0,14810.0),(29,'Active',14900.0,14900.0,14910.0),(30,'Active',15000.0,15000.0,15010.0);
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
  `name` varchar(30) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rank_type`
--

LOCK TABLES `rank_type` WRITE;
/*!40000 ALTER TABLE `rank_type` DISABLE KEYS */;
INSERT INTO `rank_type` VALUES (5,'Captain'),(1,'Ensign'),(3,'Lieutenant'),(4,'Lieutenant Commander'),(2,'Lieutenant Junior Grade');
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
INSERT INTO `starship_data` VALUES ('NCC-1031','USS Discovery','Crossfield'),('NCC-1701','USS Enterprise','Constitution'),('NCC-1701-D','USS Enterprise','Galaxy'),('NCC-1864','USS Reliant','Miranda'),('NCC-59718','USS Prometheus','Prometheus'),('NCC-63549','USS Equinox','Nova'),('NCC-71099','USS Titan','Luna'),('NCC-72015','USS Defiant','Defiant'),('NCC-74656','USS Voyager','Intrepid'),('NX-01','Enterprise','NX');
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
  `date_modified` decimal(6,1) NOT NULL DEFAULT (`date_start`),
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
INSERT INTO `starship_operator` VALUES ('NCC-1031',10,13000.1,13000.1,NULL),('NCC-1701',1,13000.1,13000.1,NULL),('NCC-1701',2,13000.1,13000.1,NULL),('NCC-1701',3,13000.1,13000.1,NULL),('NCC-1701-D',4,13000.1,13000.1,NULL),('NCC-1701-D',5,13000.1,13000.1,NULL),('NCC-1701-D',6,13000.1,13000.1,NULL),('NCC-74656',7,13000.1,13000.1,NULL),('NCC-74656',8,13000.1,13000.1,NULL),('NCC-74656',9,13000.1,13000.1,NULL);
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
  `date_modified` decimal(6,1) NOT NULL DEFAULT (`date_start`),
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
INSERT INTO `starship_owner` VALUES ('NCC-1701',11,13000.1,13000.1,NULL),('NCC-1701',12,13000.1,13000.1,NULL),('NCC-1701-D',13,13000.1,13000.1,NULL),('NCC-1701-D',14,13000.1,13000.1,NULL),('NCC-74656',15,13000.1,13000.1,NULL),('NCC-74656',16,13000.1,13000.1,NULL),('NX-01',17,13000.1,13000.1,NULL);
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
  `date_modified` decimal(6,1) NOT NULL DEFAULT (`date_start`),
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
INSERT INTO `starship_roster` VALUES ('NCC-1701',1,13001.0,13001.0,NULL,NULL),('NCC-1701',10,13010.0,13010.0,13100.0,'Transfer to another assignment'),('NCC-1701-D',2,13002.0,13002.0,NULL,NULL),('NCC-1701-D',11,13011.0,13011.0,13111.0,'Special mission assignment'),('NCC-1864',3,13003.0,13003.0,NULL,NULL),('NCC-1864',12,13012.0,13012.0,13112.0,'Temporary leave of absence'),('NCC-59718',4,13004.0,13004.0,NULL,NULL),('NCC-59718',13,13013.0,13013.0,13113.0,'Promotion and reassignment'),('NCC-63549',5,13005.0,13005.0,NULL,NULL),('NCC-63549',14,13014.0,13014.0,13114.0,'Medical transfer'),('NCC-71099',6,13006.0,13006.0,NULL,NULL),('NCC-71099',15,13015.0,13015.0,13115.0,'Research project'),('NCC-72015',7,13007.0,13007.0,NULL,NULL),('NCC-72015',16,13016.0,13016.0,13116.0,'Exploratory mission'),('NCC-74656',8,13008.0,13008.0,NULL,NULL),('NCC-74656',17,13017.0,13017.0,13117.0,'Security detail'),('NX-01',9,13009.0,13009.0,NULL,NULL),('NX-01',18,13018.0,13018.0,13118.0,'Training assignment');
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
  `status` varchar(45) NOT NULL,
  `date_start` decimal(6,1) NOT NULL,
  `date_modified` decimal(6,1) NOT NULL DEFAULT (`date_start`),
  `date_end` decimal(6,1) DEFAULT NULL,
  PRIMARY KEY (`starship_reg`,`date_start`),
  KEY `starship_reg` (`starship_reg`),
  CONSTRAINT `starship_status_ibfk_1` FOREIGN KEY (`starship_reg`) REFERENCES `starship_data` (`registry`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `starship_status`
--

LOCK TABLES `starship_status` WRITE;
/*!40000 ALTER TABLE `starship_status` DISABLE KEYS */;
INSERT INTO `starship_status` VALUES ('NCC-1701','Active',13000.1,13000.1,NULL),('NCC-1701-D','Active',13000.1,13000.1,NULL),('NCC-74656','Active',13000.1,13000.1,NULL);
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

-- Dump completed on 2023-09-01 22:53:53
