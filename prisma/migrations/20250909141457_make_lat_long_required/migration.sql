/*
  Warnings:

  - Made the column `latitude` on table `barbershop` required. This step will fail if there are existing NULL values in that column.
  - Made the column `longitude` on table `barbershop` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `barbershop` MODIFY `latitude` DOUBLE NOT NULL,
    MODIFY `longitude` DOUBLE NOT NULL;
