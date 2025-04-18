import { prisma } from '@/singletons/prisma';
import type {
  LotteriesRepository,
  LotteryOptionalKeys,
  LotteryWithRelations,
  RelationsOptions,
} from '../lotteries-repository';

export class PrismaLotteriesRepository implements LotteriesRepository {
  async findById<Keys extends LotteryOptionalKeys>(
    id: string,
    options: RelationsOptions | undefined,
  ) {
    const lottery = (await prisma.lottery.findUnique({
      where: {
        id,
      },
      include: options,
    })) as LotteryWithRelations<Keys> | null;

    return lottery;
  }
}
