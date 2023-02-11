CREATE TABLE `construction`.`workers` (
  `workerID` INT NOT NULL AUTO_INCREMENT,
  `firstName` VARCHAR(45) NOT NULL,
  `lastName` VARCHAR(45) NOT NULL,
  `address` VARCHAR(45) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`workerID`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE);
