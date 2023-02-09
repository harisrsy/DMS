/*
  Warnings:

  - Added the required column `regbes` to the `ap` table without a default value. This is not possible if the table is not empty.
  - Added the required column `audit_evidence` to the `detail` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ap" ADD COLUMN     "regbes" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "detail" ADD COLUMN     "audit_evidence" TEXT NOT NULL;
