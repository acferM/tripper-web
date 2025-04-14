import { prisma } from '@/singletons/prisma';
import type { UsersRepository } from '../users-repository';
import { AppError } from '@/error/AppError';

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
    const lotteryEmployement = await prisma.lotteryEmployees.findUnique({
      where: {
        id: lotteryEmployement_id,
      },
      select: {
        id: true,
        lottery: {
          select: {
            id: true,
          },
        },
      },
    });

    if (!lotteryEmployement)
      throw new AppError(
        'Lottery Employement not found, missing validation in service',
        500,
      );

    const user = await prisma.user.create({
      data: {
        ...userData,
        lotteryEmployement: {
          connect: {
            id: lotteryEmployement.id,
          },
        },
        register: {
          create: {
            lottery: {
              connect: {
                id: lotteryEmployement.lottery.id,
              },
            },
          },
        },
      },
    });

    return user;
  }
}
