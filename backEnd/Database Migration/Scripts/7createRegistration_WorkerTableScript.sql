CREATE TABLE `construction`.`registration_worker` (
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `accessControl` TINYINT NOT NULL,
  PRIMARY KEY (`email`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  CONSTRAINT `emailInWorkerReg`
    FOREIGN KEY (`email`)
    REFERENCES `construction`.`workers` (`email`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
