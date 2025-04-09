import { prisma } from "@/singletons/prisma";
import type { LotteriesRepository } from "../lotteries-repository";

export class PrismaLotteriesRepository implements LotteriesRepository {
  async findById(id: string) {
    const lottery = await prisma.lottery.findUnique({
      where: {
        id
      }
    })

    return lottery
  }
}
