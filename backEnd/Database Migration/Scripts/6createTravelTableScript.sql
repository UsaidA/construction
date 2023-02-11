CREATE TABLE `construction`.`travel` (
  `travelID` INT NOT NULL AUTO_INCREMENT,
  `workerID` INT NOT NULL,
  `startPoint` VARCHAR(255) NOT NULL,
  `endPoint` VARCHAR(255) NOT NULL,
  `distanceTravelled` INT NOT NULL,
  PRIMARY KEY (`travelID`),
  INDEX `workerIDinTravel_idx` (`workerID` ASC) VISIBLE,
  CONSTRAINT `workerIDinTravel`
    FOREIGN KEY (`workerID`)
    REFERENCES `construction`.`workers` (`workerID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
