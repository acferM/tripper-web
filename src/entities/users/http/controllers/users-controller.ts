import { encryption } from '@/singletons/encryption';
import { HttpErrorHandler } from '@/utils/http-error-handler';
import type { Request, Response } from 'express';
import type { CreateUserBody } from '../../contracts/create-user-contract';
import { PrismaUsersRepository } from '../../repositories/implementations/prisma-users-repository';
import { createUserService } from '../../services/create-user-service';
import { PrismaLotteriesRepository } from '@/entities/lotteries/repositories/implementations/prisma-lotteries-repository';

type CreateRequest = Request<unknown, unknown, CreateUserBody>;
type CreateResponse = Response<Omit<User, 'password'>>;

const usersRepository = new PrismaUsersRepository();
const lotteriesRepository = new PrismaLotteriesRepository();

export class UsersController {
  @HttpErrorHandler()
  async create(request: CreateRequest, response: CreateResponse) {
    const { lottery_id, email, name, password, role } = request.body;

    const user = await createUserService({
      data: {
        lottery_id,
        email,
        name,
        password,
        role,
      },
      deps: {
        encryption,
        usersRepository,
        lotteriesRepository,
      },
    });

    response.status(201).json(user);
  }
}
