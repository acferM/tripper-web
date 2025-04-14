import { AppError } from '@/error/AppError';
import type { LotteriesRepository } from '../repositories/lotteries-repository';

type GetLotterySavingsServiceParams = {
  data: {
    lottery_id: string;
  };
  deps: {
    lotteriesRepository: LotteriesRepository;
  };
};

export async function getLotterySavingsService({
  data,
  deps,
}: GetLotterySavingsServiceParams) {
  const { lotteriesRepository } = deps;

  const lottery = await lotteriesRepository.findById<'safe' | 'preserve'>(
    data.lottery_id,
    {
      safe: true,
      preserve: true,
    },
  );

  if (!lottery) {
    throw new AppError('Lottery not found', 404);
  }

  return {
    safe: lottery.safe.value,
    preserve: lottery.preserve.value,
  };
}
