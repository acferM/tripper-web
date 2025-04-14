-- CreateTable
CREATE TABLE "preserves_passages" (
    "id" TEXT NOT NULL,
    "value" INTEGER NOT NULL,
    "preserve_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "preserves_passages_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "preserves_passages" ADD CONSTRAINT "preserves_passages_preserve_id_fkey" FOREIGN KEY ("preserve_id") REFERENCES "preserves"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
