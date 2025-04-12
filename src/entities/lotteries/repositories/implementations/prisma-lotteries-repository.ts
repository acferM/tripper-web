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
      include: {
        preserve: options?.preserve ?? false,
        registers: options?.registers ?? false,
        safe: options?.safe ?? false,
      },
    })) as LotteryWithRelations<Keys> | null;

    return lottery;
  }
}
