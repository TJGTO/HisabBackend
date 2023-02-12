/*
  Warnings:

  - You are about to drop the column `doneby` on the `Transactions` table. All the data in the column will be lost.
  - Added the required column `doneBy` to the `Transactions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Transactions" DROP COLUMN "doneby",
ADD COLUMN     "doneBy" TEXT NOT NULL;
