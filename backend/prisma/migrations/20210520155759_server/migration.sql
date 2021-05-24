-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('SERVER_OWNER', 'SERVER_BOOSTER', 'OTHER');

-- CreateTable
CREATE TABLE "Server" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UsersOnServers" (
    "id" TEXT NOT NULL,
    "role" "UserRole" NOT NULL,
    "nickname" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "serverId" TEXT NOT NULL,

    PRIMARY KEY ("userId","serverId")
);

-- CreateIndex
CREATE UNIQUE INDEX "UsersOnServers.id_unique" ON "UsersOnServers"("id");

-- AddForeignKey
ALTER TABLE "UsersOnServers" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsersOnServers" ADD FOREIGN KEY ("serverId") REFERENCES "Server"("id") ON DELETE CASCADE ON UPDATE CASCADE;
