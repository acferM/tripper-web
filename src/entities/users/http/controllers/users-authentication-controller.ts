import type { Request, Response } from 'express';
import type {
  CreateUserAuthenticationBody,
  CreateUserAuthenticationResponse,
} from '../../contracts/create-user-authentication-contract';
import { authenticateUserService } from '../../services/authenticate-user-service';
import { PrismaUsersRepository } from '../../repositories/implementations/prisma-users-repository';
import { encryption } from '@/singletons/encryption';
import { jwt } from '@/singletons/jwt';

type CreateRequest = Request<unknown, unknown, CreateUserAuthenticationBody>;
type CreateResponse = Response<CreateUserAuthenticationResponse>;

const usersRepository = new PrismaUsersRepository();

export class UsersAuthenticationController {
  async create(request: CreateRequest, response: CreateResponse) {
    const { email, password } = request.body;

    const { user, token } = await authenticateUserService({
      data: {
        email,
        password,
      },
      deps: {
        usersRepository,
        encryption,
        jwt,
      },
    });

    response.json({
      user,
      token,
    });
  }
}
