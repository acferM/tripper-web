import type { LotteriesRepository } from '@/entities/lotteries/repositories/lotteries-repository';
import type { SafesRepository } from '../repositories/safes-repository';
import { AppError } from '@/error/AppError';

type GetSafeServiceParams = {
  data: {
    lottery_id: string;
  };
  deps: {
    safesRepository: SafesRepository;
  };
};

export async function getSafeService({ data, deps }: GetSafeServiceParams) {
  const { safesRepository } = deps;

  const safe = await safesRepository.findByLotteryId(data.lottery_id);

  if (!safe) {
    throw new AppError('No safe found for this lottery id', 404);
  }

  return safe;
}
