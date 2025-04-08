import { prisma } from "@/singletons/prisma";
import type { UsersRepository } from "../users-repository";

export class PrismaUsersRepository implements UsersRepository {
  async findByEmail(email: string) {
    console.log('oie')
    const user = await prisma.user.findUnique({
      where: {
        email
      }
    })

    return user
  }

  async create(userData: CreateUserDTO) {
    console.log('entrei aqui')
    const user = await prisma.user.create({
      data: userData
    })

    return user
  }
}
