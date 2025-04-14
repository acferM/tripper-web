import { AppError } from '@/error/AppError';
import type { Encryption } from '@/singletons/encryption';
import type { UsersRepository } from '../repositories/users-repository';
import type { LotteriesRepository } from '@/entities/lotteries/repositories/lotteries-repository';

type CreateUserServiceParams = {
  data: {
    lottery_id: string;
    name: string;
    email: string;
    password: string;
    role: UserRoles;
  };
  deps: {
    encryption: Encryption;
    usersRepository: UsersRepository;
    lotteriesRepository: LotteriesRepository;
  };
};

export async function createUserService({
  data,
  deps,
}: CreateUserServiceParams) {
  const { usersRepository, lotteriesRepository, encryption } = deps;

  const userExists = await usersRepository.findByEmail(data.email);

  if (userExists) {
    throw new AppError('User already exists');
  }

  const lottery = await lotteriesRepository.findById<'employement'>(
    data.lottery_id,
    { employement: true },
  );

  if (!lottery) {
    throw new AppError('Lottery not found', 404);
  }

  const hashedPassword = encryption.hash(data.password);

  const user = await usersRepository.create({
    lotteryEmployement_id: lottery.employement.id,
    email: data.email,
    name: data.name,
    password: hashedPassword,
    role: data.role,
  });

  const { password, ...userWithoutPassword } = user;

  return userWithoutPassword;
}
