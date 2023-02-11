CREATE TABLE `construction`.`projects` (
  `projectID` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `address` VARCHAR(255) NOT NULL,
  `description` VARCHAR(500) NOT NULL,
  `completed` TINYINT NOT NULL,
  PRIMARY KEY (`projectID`));
