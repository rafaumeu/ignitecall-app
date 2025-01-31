-- DropForeignKey
ALTER TABLE `schedulings` DROP FOREIGN KEY `schedulings_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `user_time_intervals` DROP FOREIGN KEY `user_time_intervals_user_id_fkey`;

-- DropIndex
DROP INDEX `schedulings_user_id_fkey` ON `schedulings`;

-- DropIndex
DROP INDEX `user_time_intervals_user_id_fkey` ON `user_time_intervals`;

-- AddForeignKey
ALTER TABLE `user_time_intervals` ADD CONSTRAINT `user_time_intervals_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `schedulings` ADD CONSTRAINT `schedulings_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
