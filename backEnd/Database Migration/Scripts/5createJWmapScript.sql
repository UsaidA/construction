CREATE TABLE `construction`.`jwmapping` (
  `jwmappingID` INT NOT NULL AUTO_INCREMENT,
  `workerID` INT NOT NULL,
  `jobID` INT NOT NULL,
  PRIMARY KEY (`jwmappingID`),
  INDEX `workerIDinJWMapping_idx` (`workerID` ASC) VISIBLE,
  INDEX `jobIDinJWMapping_idx` (`jobID` ASC) VISIBLE,
  CONSTRAINT `workerIDinJWMapping`
    FOREIGN KEY (`workerID`)
    REFERENCES `construction`.`workers` (`workerID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `jobIDinJWMapping`
    FOREIGN KEY (`jobID`)
    REFERENCES `construction`.`jobs` (`jobID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);