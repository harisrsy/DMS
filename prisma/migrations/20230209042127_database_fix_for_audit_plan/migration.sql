/*
  Warnings:

  - Added the required column `audit_evidence` to the `detail` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "detail" ADD COLUMN     "apId" INTEGER,
ADD COLUMN     "audit_evidence" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "detail" ADD CONSTRAINT "detail_apId_fkey" FOREIGN KEY ("apId") REFERENCES "ap"("id") ON DELETE SET NULL ON UPDATE CASCADE;
