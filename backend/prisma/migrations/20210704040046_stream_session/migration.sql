-- CreateEnum
CREATE TYPE "StreamSessionVideoType" AS ENUM ('SCREEN', 'CAMERA', 'OFF');

-- CreateEnum
CREATE TYPE "StreamSessionAudioType" AS ENUM ('ON', 'OFF');

-- AlterTable
ALTER TABLE "Channel" ADD COLUMN     "mediaPipelineId" TEXT;

-- CreateTable
CREATE TABLE "StreamSession" (
    "id" TEXT NOT NULL,
    "webRtcEndpointId" TEXT NOT NULL,
    "video" "StreamSessionVideoType" NOT NULL DEFAULT E'OFF',
    "audio" "StreamSessionAudioType" NOT NULL DEFAULT E'OFF',
    "userId" TEXT NOT NULL,
    "channelId" TEXT NOT NULL,
    "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "StreamSession" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StreamSession" ADD FOREIGN KEY ("channelId") REFERENCES "Channel"("id") ON DELETE CASCADE ON UPDATE CASCADE;
