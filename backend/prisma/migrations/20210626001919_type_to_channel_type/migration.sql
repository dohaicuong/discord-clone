/*
  Warnings:

  - You are about to drop the column `type` on the `Channel` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Channel" DROP COLUMN "type",
ADD COLUMN     "channelType" "ChannelType" NOT NULL DEFAULT E'TEXT';
