/*
  Warnings:

  - You are about to drop the column `categoryId` on the `Channel` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Channel" DROP CONSTRAINT "Channel_categoryId_fkey";

-- AlterTable
ALTER TABLE "Channel" DROP COLUMN "categoryId",
ADD COLUMN     "channelCategoryId" TEXT;

-- AddForeignKey
ALTER TABLE "Channel" ADD FOREIGN KEY ("channelCategoryId") REFERENCES "ChannelCategory"("id") ON DELETE SET NULL ON UPDATE CASCADE;
