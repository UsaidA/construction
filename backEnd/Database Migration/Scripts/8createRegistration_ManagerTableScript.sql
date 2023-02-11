CREATE TABLE `construction`.`registration_manager` (
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `accessControl` TINYINT NOT NULL,
  PRIMARY KEY (`email`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  CONSTRAINT `emailInManagerReg`
    FOREIGN KEY (`email`)
    REFERENCES `construction`.`managers` (`email`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
