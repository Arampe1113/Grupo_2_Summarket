-- MySQL Script generated by MySQL Workbench
-- Mon Oct 17 17:55:27 2022
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema summarket
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema summarket
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `summarket` DEFAULT CHARACTER SET utf8mb4 ;
USE `summarket` ;

-- -----------------------------------------------------
-- Table `summarket`.`brand`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `summarket`.`brand` (
  `idbrand` INT(11) NOT NULL AUTO_INCREMENT,
  `brand` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`idbrand`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `summarket`.`category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `summarket`.`category` (
  `idcategory` INT(11) NOT NULL AUTO_INCREMENT,
  `category_name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idcategory`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `summarket`.`color`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `summarket`.`color` (
  `idcolor` INT(11) NOT NULL AUTO_INCREMENT,
  `color` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`idcolor`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `summarket`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `summarket`.`products` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `description` VARCHAR(100) NOT NULL,
  `image` VARCHAR(45) NOT NULL,
  `category_id` INT(11) NOT NULL,
  `price` INT(11) NOT NULL,
  `discount` INT(11) NOT NULL,
  `quantity` INT(11) NOT NULL DEFAULT 1,
  `brand_id` INT(11) NOT NULL,
  `color_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_productcategory_idx` (`category_id` ASC) ,
  INDEX `fk_productbrand` (`brand_id` ASC) ,
  INDEX `fk_productcolor` (`color_id` ASC) ,
  CONSTRAINT `fk_productbrand`
    FOREIGN KEY (`brand_id`)
    REFERENCES `summarket`.`brand` (`idbrand`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_productcategory`
    FOREIGN KEY (`category_id`)
    REFERENCES `summarket`.`category` (`idcategory`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_productcolor`
    FOREIGN KEY (`color_id`)
    REFERENCES `summarket`.`color` (`idcolor`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `summarket`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `summarket`.`user` (
  `user_id` INT(11) NOT NULL AUTO_INCREMENT,
  `firstName` VARCHAR(45) NOT NULL,
  `lastName` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `avatar` VARCHAR(45) NOT NULL,
  `rol` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`user_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `summarket`.`order_history`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `summarket`.`order_history` (
  `order_id` INT(11) NOT NULL AUTO_INCREMENT,
  `user_id` INT(11) NOT NULL,
  `product_id` INT(11) NOT NULL,
  `amount` INT(11) NOT NULL,
  `shipping_address` VARCHAR(45) NOT NULL,
  `order_date` DATE NOT NULL,
  `order_status` VARCHAR(45) NOT NULL,
  `quantity` INT(11) NOT NULL,
  PRIMARY KEY (`order_id`),
  INDEX `fk_user` (`user_id` ASC) ,
  INDEX `fk_product` (`product_id` ASC) ,
  CONSTRAINT `fk_product`
    FOREIGN KEY (`product_id`)
    REFERENCES `summarket`.`products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `summarket`.`user` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


-- -----------------------------------------------------
-- Table `summarket`.`user_product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `summarket`.`user_product` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `product_id` INT(11) NOT NULL,
  `user_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_userID` (`user_id` ASC) ,
  INDEX `fk_productID` (`product_id` ASC) ,
  CONSTRAINT `fk_productID`
    FOREIGN KEY (`product_id`)
    REFERENCES `summarket`.`products` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_userID`
    FOREIGN KEY (`user_id`)
    REFERENCES `summarket`.`user` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
