import { AppError } from '@/error/AppError';
import type { LotteriesRepository } from '../repositories/lotteries-repository';

type GetLotteryDashboardServiceParams = {
  data: {
    lottery_id: string;
  };
  deps: {
    lotteriesRepository: LotteriesRepository;
  };
};

export async function getLotteryDashboardService({
  data,
  deps,
}: GetLotteryDashboardServiceParams) {
  const { lotteriesRepository } = deps;

  const lottery = await lotteriesRepository.findById<
    'preserve' | 'registers' | 'safe'
  >(data.lottery_id, {
    safe: true,
    preserve: true,
    registers: true,
  });

  if (!lottery) {
    throw new AppError('Lottery not found', 404);
  }

  const registersSum = lottery.registers.reduce((accumulator, register) => {
    return accumulator + register.value;
  }, 0);

  return {
    safe: lottery.safe.value,
    preserve: lottery.preserve.value,
    registers: registersSum,
  };
}
