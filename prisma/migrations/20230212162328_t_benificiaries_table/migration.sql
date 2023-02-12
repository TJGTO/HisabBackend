-- CreateTable
CREATE TABLE "TBenificiaries" (
    "id" TEXT NOT NULL,
    "trnsactionId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "TBenificiaries_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TBenificiaries" ADD CONSTRAINT "TBenificiaries_trnsactionId_fkey" FOREIGN KEY ("trnsactionId") REFERENCES "Transaction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
