import type { Request, Response } from "express";
import type { CreateUserBody } from "../../contracts/create-user-contract";
import { createUserService } from "../../services/create-user-service";
import { encryption } from "@/singletons/encryption";
import { PrismaUsersRepository } from "../../repositories/implementations/prisma-users-repository";

type CreateRequest = Request<unknown, unknown, CreateUserBody>
type CreateResponse = Response<Omit<User, 'password'>>

const usersRepository = new PrismaUsersRepository()

export class UsersController {
  async create(request: CreateRequest, response: CreateResponse) {
    const { email, name, password, role } = request.body

    const user = await createUserService({
      data: {
        email,
        name,
        password,
        role
      },
      deps: {
        encryption,
        usersRepository: usersRepository
      }
    })

    response.status(201).json(user)
  }
}
