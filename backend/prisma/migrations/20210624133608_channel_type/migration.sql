-- CreateEnum
CREATE TYPE "ChannelType" AS ENUM ('TEXT', 'VOICE');

-- AlterTable
ALTER TABLE "Channel" ADD COLUMN     "type" "ChannelType" NOT NULL DEFAULT E'TEXT';
