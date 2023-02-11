CREATE TABLE `construction`.`jobs` (
  `jobID` INT NOT NULL AUTO_INCREMENT,
  `projectID` INT NOT NULL,
  `description` VARCHAR(1000) NOT NULL,
  `completed` TINYINT NOT NULL,
  PRIMARY KEY (`jobID`),
  INDEX `projectIDinJobs_idx` (`projectID` ASC) VISIBLE,
  CONSTRAINT `projectIDinJobs`
    FOREIGN KEY (`projectID`)
    REFERENCES `construction`.`projects` (`projectID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
