import type { LotteriesRepository } from '@/entities/lotteries/repositories/lotteries-repository';
import type { UsersRepository } from '@/entities/users/repositories/users-repository';
import { AppError } from '@/error/AppError';
import type { RegistersRepository } from '../repositories/registers-repository';

type CreateRegisterServiceParams = {
  data: {
    lottery_id: string;
    operator_id: string;
  };
  deps: {
    registersRepository: RegistersRepository;
    lotteriesRepository: LotteriesRepository;
    usersRepository: UsersRepository;
  };
};

export async function CreateRegisterService({
  data,
  deps,
}: CreateRegisterServiceParams) {
  const { registersRepository, lotteriesRepository, usersRepository } = deps;

  const lottery = await lotteriesRepository.findById(data.lottery_id);

  if (!lottery) {
    throw new AppError('Lottery not found', 404);
  }

  const operator = await usersRepository.findById(data.operator_id);

  if (!operator) {
    throw new AppError('User not found', 404);
  }

  const newRegister = await registersRepository.create({
    lottery_id: lottery.id,
    operator_id: operator.id,
  });

  const { password: _, ...registerOperatorWithoutPassword } =
    newRegister.operator;

  return {
    ...newRegister,
    operator: registerOperatorWithoutPassword,
  };
}
