-- AlterTable
ALTER TABLE `issue` ADD COLUMN `pirority` ENUM('NORMAL', 'URGENT', 'PIRORITY', 'CRITICAL') NOT NULL DEFAULT 'NORMAL';
