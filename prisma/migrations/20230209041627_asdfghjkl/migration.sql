/*
  Warnings:

  - You are about to drop the column `apId` on the `detail` table. All the data in the column will be lost.
  - You are about to drop the column `audit_evidence` on the `detail` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "detail" DROP CONSTRAINT "detail_apId_fkey";

-- AlterTable
ALTER TABLE "detail" DROP COLUMN "apId",
DROP COLUMN "audit_evidence";
