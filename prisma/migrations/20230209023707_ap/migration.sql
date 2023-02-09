-- AlterTable
ALTER TABLE "User" ALTER COLUMN "idNumber" DROP NOT NULL,
ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "unit" DROP NOT NULL;

-- CreateTable
CREATE TABLE "ap" (
    "id" SERIAL NOT NULL,
    "docno" TEXT NOT NULL,
    "docdate" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "audit_type" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "detail" (
    "id" SERIAL NOT NULL,
    "apId" INTEGER,
    "no" INTEGER NOT NULL,
    "requirement" TEXT NOT NULL,
    "description" TEXT,
    "sub_description" TEXT,
    "work_station" TEXT NOT NULL,
    "planned_week" TEXT,
    "visit_date" TEXT
);

-- CreateTable
CREATE TABLE "issuence" (
    "id" SERIAL NOT NULL,
    "apId" INTEGER,
    "issueNbr" INTEGER NOT NULL,
    "issueDate" TEXT NOT NULL,
    "issueDesc" TEXT NOT NULL,
    "issuedBy" TEXT NOT NULL,
    "hdoApprove" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "ap_id_key" ON "ap"("id");

-- CreateIndex
CREATE UNIQUE INDEX "detail_id_key" ON "detail"("id");

-- CreateIndex
CREATE UNIQUE INDEX "detail_no_key" ON "detail"("no");

-- CreateIndex
CREATE UNIQUE INDEX "issuence_id_key" ON "issuence"("id");

-- AddForeignKey
ALTER TABLE "detail" ADD CONSTRAINT "detail_apId_fkey" FOREIGN KEY ("apId") REFERENCES "ap"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "issuence" ADD CONSTRAINT "issuence_apId_fkey" FOREIGN KEY ("apId") REFERENCES "ap"("id") ON DELETE SET NULL ON UPDATE CASCADE;
