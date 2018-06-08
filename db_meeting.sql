CREATE DATABASE  IF NOT EXISTS `db_meeting` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `db_meeting`;
-- MySQL dump 10.13  Distrib 5.6.17, for Win32 (x86)
--
-- Host: localhost    Database: db_meeting
-- ------------------------------------------------------
-- Server version	5.0.45-community-nt

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Not dumping tablespaces as no INFORMATION_SCHEMA.FILES table on this server
--

--
-- Table structure for table `boardingstop`
--

DROP TABLE IF EXISTS `boardingstop`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `boardingstop` (
  `BOARDING_STOP_ID` int(11) NOT NULL auto_increment,
  `NAME` varchar(45) NOT NULL,
  PRIMARY KEY  (`BOARDING_STOP_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `boardingstop`
--

LOCK TABLES `boardingstop` WRITE;
/*!40000 ALTER TABLE `boardingstop` DISABLE KEYS */;
INSERT INTO `boardingstop` VALUES (1,'Jakkur layout stop');
/*!40000 ALTER TABLE `boardingstop` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `caretaker`
--

DROP TABLE IF EXISTS `caretaker`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `caretaker` (
  `CARETAKER_ID` int(11) NOT NULL auto_increment,
  `NAME` varchar(45) NOT NULL,
  PRIMARY KEY  (`CARETAKER_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `caretaker`
--

LOCK TABLES `caretaker` WRITE;
/*!40000 ALTER TABLE `caretaker` DISABLE KEYS */;
INSERT INTO `caretaker` VALUES (1,'Raghu Teja');
/*!40000 ALTER TABLE `caretaker` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `department`
--

DROP TABLE IF EXISTS `department`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `department` (
  `DEPARTMENT_ID` int(11) NOT NULL auto_increment,
  `NAME` varchar(45) NOT NULL,
  `DESCRIPTION` varchar(45) default NULL,
  PRIMARY KEY  (`DEPARTMENT_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `department`
--

LOCK TABLES `department` WRITE;
/*!40000 ALTER TABLE `department` DISABLE KEYS */;
INSERT INTO `department` VALUES (2,'Development','Application Development'),(4,'Designer','Application Design');
/*!40000 ALTER TABLE `department` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `department_meeting`
--

DROP TABLE IF EXISTS `department_meeting`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `department_meeting` (
  `MEETING_ID` int(11) NOT NULL auto_increment,
  `DEPARTMENT_ID` int(11) NOT NULL,
  KEY `FK_MEETING_DEPARTMENT_IDX` (`DEPARTMENT_ID`),
  KEY `FK_DEPARTMENTMEETING_MEETING_IDX` (`MEETING_ID`),
  CONSTRAINT `FK_DEPARTMENTMEETING_DEPARTMENT` FOREIGN KEY (`DEPARTMENT_ID`) REFERENCES `department` (`DEPARTMENT_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_DEPARTMENTMEETING_MEETING` FOREIGN KEY (`MEETING_ID`) REFERENCES `meeting` (`MEETING_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `department_meeting`
--

LOCK TABLES `department_meeting` WRITE;
/*!40000 ALTER TABLE `department_meeting` DISABLE KEYS */;
INSERT INTO `department_meeting` VALUES (5,2),(5,4);
/*!40000 ALTER TABLE `department_meeting` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `employee` (
  `EMPLOYEE_ID` int(11) NOT NULL auto_increment,
  `NAME` varchar(45) NOT NULL,
  `SURNAME` varchar(45) NOT NULL,
  `SALARY` int(11) NOT NULL,
  `DEPARTMENT_ID` int(11) default NULL,
  PRIMARY KEY  (`EMPLOYEE_ID`),
  KEY `FK_EMPLOYEE_DEPARTMENT_IDX` (`DEPARTMENT_ID`),
  CONSTRAINT `FK_EMPLOYEE_DEPARTMENT` FOREIGN KEY (`DEPARTMENT_ID`) REFERENCES `department` (`DEPARTMENT_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee`
--

LOCK TABLES `employee` WRITE;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
INSERT INTO `employee` VALUES (26,'Raghu ','Tej',100000,2),(27,'Jayavardhan','M',50000,4),(28,'Sekhar ','Raj Kumar',30000,4),(29,'Vidhya','R',60000,2),(30,'Santhosh','Bhayya',40000,4),(31,'Sivakumar ','Pallipati',30000,4),(32,'Anil','Kumar',35000,4),(33,'Srinivas','Rajesh',20000,2),(34,'Sandhya','G',20000,4),(35,'Kiran','H S',40000,2),(36,'Indrashekar',' G R',30000,2),(37,'SivaKumar','Pallipati',30000,2),(38,'rdtyyhtu','dtrdty',6575676,4),(39,'rtshrthjtr','dfghrtd',675756,2);
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `meeting`
--

DROP TABLE IF EXISTS `meeting`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `meeting` (
  `MEETING_ID` int(11) NOT NULL auto_increment,
  `NAME` varchar(45) NOT NULL,
  `DESCRIPTION` varchar(45) default NULL,
  PRIMARY KEY  (`MEETING_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `meeting`
--

LOCK TABLES `meeting` WRITE;
/*!40000 ALTER TABLE `meeting` DISABLE KEYS */;
INSERT INTO `meeting` VALUES (5,'REVISION','WEEKLY REVISION');
/*!40000 ALTER TABLE `meeting` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `route`
--

DROP TABLE IF EXISTS `route`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `route` (
  `ROUTE_ID` int(11) NOT NULL auto_increment,
  `NAME` varchar(45) NOT NULL,
  PRIMARY KEY  (`ROUTE_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `route`
--

LOCK TABLES `route` WRITE;
/*!40000 ALTER TABLE `route` DISABLE KEYS */;
INSERT INTO `route` VALUES (1,'Jakkur'),(2,'Vidhyanagar Cross');
/*!40000 ALTER TABLE `route` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `standard`
--

DROP TABLE IF EXISTS `standard`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `standard` (
  `STANDARD_ID` int(11) NOT NULL auto_increment,
  `NAME` varchar(45) NOT NULL,
  PRIMARY KEY  (`STANDARD_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `standard`
--

LOCK TABLES `standard` WRITE;
/*!40000 ALTER TABLE `standard` DISABLE KEYS */;
INSERT INTO `standard` VALUES (1,'CLASS-1A'),(2,'CLASS-2A'),(6,'CLASS-3A'),(7,'CLASS-4A'),(8,'CLASS-5A'),(9,'CLASS-6A'),(10,'CLASS-7A'),(11,'CLASS-8A'),(12,'CLASS-9A'),(13,'CLASS-10A'),(14,'CLASS-11A');
/*!40000 ALTER TABLE `standard` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student`
--

DROP TABLE IF EXISTS `student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `student` (
  `STUDENT_ID` int(11) NOT NULL auto_increment,
  `NAME` varchar(45) NOT NULL,
  `P_NAME` varchar(45) NOT NULL,
  `ADMISSION_NO` int(11) NOT NULL,
  `Standard` int(11) default NULL,
  `T_NAME` varchar(45) NOT NULL,
  `STANDARD_ID` int(11) default NULL,
  `DOB` varchar(45) default NULL,
  `DOJ` varchar(45) default NULL,
  `ROUTE_ID` int(11) default NULL,
  `BOARDING_STOP_ID` int(11) default NULL,
  `CARETAKER_ID` int(11) default NULL,
  PRIMARY KEY  (`STUDENT_ID`),
  KEY `FK_STUDENT_STANDARD_IDX` (`STANDARD_ID`),
  KEY `FK_STUDENT_ROUTE_IDX` (`ROUTE_ID`),
  KEY `FK_STUDENT_BOARDING_STOP_IDX` (`BOARDING_STOP_ID`),
  KEY `FK_STUDENT_CARETAKER_IDX` (`CARETAKER_ID`),
  CONSTRAINT `FK_STUDENT_BOARDINGSTOP` FOREIGN KEY (`BOARDING_STOP_ID`) REFERENCES `boardingstop` (`BOARDING_STOP_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_STUDENT_CARETAKER` FOREIGN KEY (`CARETAKER_ID`) REFERENCES `caretaker` (`CARETAKER_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_STUDENT_ROUTE` FOREIGN KEY (`ROUTE_ID`) REFERENCES `route` (`ROUTE_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_STUDENT_STANDARD` FOREIGN KEY (`STANDARD_ID`) REFERENCES `standard` (`STANDARD_ID`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student`
--

LOCK TABLES `student` WRITE;
/*!40000 ALTER TABLE `student` DISABLE KEYS */;
INSERT INTO `student` VALUES (3,'Srinivas','Rajesh',13128,NULL,'AVR',1,'1990-09-09','2000-02-09',2,1,1),(4,'Raghu','Tejesh',13299,NULL,'see',2,'2000-07-13','2010-06-10',2,1,1),(5,'Jayavardhan','Jaswanth',13199,NULL,'NVR',1,'1989-07-13','1998-06-17',1,1,1),(6,'Vismaya','Vidhya',13268,NULL,'AVR',1,'2013-01-30','2018-06-01',1,1,1);
/*!40000 ALTER TABLE `student` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-06-08 15:27:43
