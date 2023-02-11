CREATE TABLE `construction`.`managers` (
  `managerID` INT NOT NULL AUTO_INCREMENT,
  `firstName` VARCHAR(45) NOT NULL,
  `lastName` VARCHAR(45) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`managerID`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE);
