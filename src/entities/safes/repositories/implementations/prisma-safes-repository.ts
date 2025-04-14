import { prisma } from '@/singletons/prisma';
import type { SafesRepository } from '../safes-repository';

export class PrismaSafesRepository implements SafesRepository {
  async findByLotteryId(lottery_id: string) {
    const preserve = await prisma.safe.findUnique({
      where: {
        lottery_id,
      },
    });

    return preserve;
  }

  async updateValue({ safe_id, operation, value }: UpdateSafeValueDTO) {
    const updatedSafe = await prisma.safe.update({
      where: {
        id: safe_id,
      },
      data: {
        value: {
          [operation]: value,
        },
      },
    });

    return updatedSafe;
  }
}
