import { prisma } from '@/singletons/prisma';
import type { UsersRepository } from '../users-repository';

export class PrismaUsersRepository implements UsersRepository {
  async findById(id: string) {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    return user;
  }

  async findByEmail(email: string) {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    return user;
  }

  async findEmployeesFromLottery(lottery_id: string) {
    const employement = await prisma.lotteryEmployees.findUnique({
      where: {
        lottery_id,
      },
      include: {
        employees: true,
      },
    });

    if (!employement) return null;

    return employement.employees;
  }

  async create({ lotteryEmployement_id, ...userData }: CreateUserDTO) {
    const user = await prisma.user.create({
      data: {
        ...userData,
        lotteryEmployement: {
          connect: {
            id: lotteryEmployement_id,
          },
        },
      },
    });

    return user;
  }
}
