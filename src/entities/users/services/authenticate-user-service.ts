import type { Encryption } from '@/singletons/encryption';
import type { UsersRepository } from '../repositories/users-repository';
import type { JWT } from '@/singletons/jwt';
import { AppError } from '@/error/AppError';

type AuthenticateUserServiceParams = {
  data: {
    email: string;
    password: string;
  };
  deps: {
    usersRepository: UsersRepository;
    encryption: Encryption;
    jwt: JWT;
  };
};

export async function authenticateUserService({
  data,
  deps,
}: AuthenticateUserServiceParams) {
  const { encryption, jwt, usersRepository } = deps;

  const user = await usersRepository.findByEmail(data.email);

  if (!user) {
    throw new AppError('User not found', 404);
  }

  const passwordMatches = encryption.compare(data.password, user.password);

  if (!passwordMatches) {
    throw new AppError('No user found with this email/password');
  }

  const token = jwt.sign(
    {
      name: user.name,
      role: user.role,
    },
    user.id,
  );

  const { password: _, ...userWithoutPassword } = user;

  return {
    user: userWithoutPassword,
    token,
  };
}
