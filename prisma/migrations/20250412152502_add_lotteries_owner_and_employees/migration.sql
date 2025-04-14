/*
  Warnings:

  - A unique constraint covering the columns `[owner_id]` on the table `lotteries` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `owner_id` to the `lotteries` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "lotteries" ADD COLUMN     "owner_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "lottery_employement_id" TEXT;

-- CreateTable
CREATE TABLE "lotteries_employees" (
    "id" TEXT NOT NULL,
    "lottery_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "lotteries_employees_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "lotteries_employees_lottery_id_key" ON "lotteries_employees"("lottery_id");

-- CreateIndex
CREATE UNIQUE INDEX "lotteries_owner_id_key" ON "lotteries"("owner_id");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_lottery_employement_id_fkey" FOREIGN KEY ("lottery_employement_id") REFERENCES "lotteries_employees"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lotteries" ADD CONSTRAINT "lotteries_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lotteries_employees" ADD CONSTRAINT "lotteries_employees_lottery_id_fkey" FOREIGN KEY ("lottery_id") REFERENCES "lotteries"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
