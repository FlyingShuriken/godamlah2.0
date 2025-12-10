/*
  Warnings:

  - A unique constraint covering the columns `[hash]` on the table `Certificate` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `updatedAt` to the `Certificate` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "CertificateType" AS ENUM ('ATTENDANCE', 'ACHIEVEMENT', 'CERTIFICATION', 'EMPLOYMENT');

-- AlterTable
ALTER TABLE "Certificate" ADD COLUMN     "description" TEXT,
ADD COLUMN     "hash" TEXT,
ADD COLUMN     "skills" TEXT[],
ADD COLUMN     "type" "CertificateType" NOT NULL DEFAULT 'ACHIEVEMENT',
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Certificate_hash_key" ON "Certificate"("hash");

-- CreateIndex
CREATE INDEX "Certificate_organizationId_idx" ON "Certificate"("organizationId");
