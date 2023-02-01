/*
  Warnings:

  - You are about to drop the column `hash` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "hash",
ADD COLUMN     "salt" VARCHAR(100),
ALTER COLUMN "password" DROP NOT NULL,
ALTER COLUMN "profilePicture" DROP NOT NULL;
