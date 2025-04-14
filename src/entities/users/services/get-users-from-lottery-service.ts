import type { LotteriesRepository } from '@/entities/lotteries/repositories/lotteries-repository';
import type { UsersRepository } from '../repositories/users-repository';
import { AppError } from '@/error/AppError';

type GetUsersFromLotteryService = {
  data: {
    lottery_id: string;
  };
  deps: {
    usersRepository: UsersRepository;
    lotteriesRepository: LotteriesRepository;
  };
};

export async function getUsersFromLotteryService({
  data,
  deps,
}: GetUsersFromLotteryService) {
  const { lotteriesRepository, usersRepository } = deps;

  const lottery = await lotteriesRepository.findById(data.lottery_id);

  if (!lottery) {
    throw new AppError('Lottery not found', 404);
  }

  const employees = await usersRepository.findEmployeesFromLottery(lottery.id);

  if (!employees) {
    throw new AppError('No employees found for this lottery', 404);
  }

  return employees;
}
