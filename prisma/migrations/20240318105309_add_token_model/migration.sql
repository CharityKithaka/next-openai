-- CreateTable
CREATE TABLE `Token` (
    `clerkId` VARCHAR(191) NOT NULL,
    `tokens` INTEGER NOT NULL DEFAULT 1000,

    PRIMARY KEY (`clerkId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
