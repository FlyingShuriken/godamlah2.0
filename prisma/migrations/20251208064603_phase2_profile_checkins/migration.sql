/*
  Warnings:

  - A unique constraint covering the columns `[userId,eventId,type]` on the table `CheckIn` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,organizationId,type]` on the table `CheckIn` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,eventId,type]` on the table `Experience` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,organizationId,type]` on the table `Experience` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[mykadNumber]` on the table `user` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "ProfileType" AS ENUM ('USER', 'ORGANIZER', 'COMPANY');

-- AlterTable
ALTER TABLE "CheckIn" ADD COLUMN     "addedById" TEXT,
ADD COLUMN     "verificationStatus" "VerificationStatus" NOT NULL DEFAULT 'UNVERIFIED';

-- AlterTable
ALTER TABLE "Organization" ADD COLUMN     "industry" TEXT;

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "mykadNumber" TEXT,
ADD COLUMN     "mykadVerifiedAt" TIMESTAMP(3),
ADD COLUMN     "profileType" "ProfileType" NOT NULL DEFAULT 'USER';

-- CreateIndex
CREATE UNIQUE INDEX "CheckIn_userId_eventId_type_key" ON "CheckIn"("userId", "eventId", "type");

-- CreateIndex
CREATE UNIQUE INDEX "CheckIn_userId_organizationId_type_key" ON "CheckIn"("userId", "organizationId", "type");

-- CreateIndex
CREATE UNIQUE INDEX "Experience_userId_eventId_type_key" ON "Experience"("userId", "eventId", "type");

-- CreateIndex
CREATE UNIQUE INDEX "Experience_userId_organizationId_type_key" ON "Experience"("userId", "organizationId", "type");

-- CreateIndex
CREATE UNIQUE INDEX "user_mykadNumber_key" ON "user"("mykadNumber");

-- CreateIndex
CREATE INDEX "user_mykadNumber_idx" ON "user"("mykadNumber");

-- AddForeignKey
ALTER TABLE "CheckIn" ADD CONSTRAINT "CheckIn_addedById_fkey" FOREIGN KEY ("addedById") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
