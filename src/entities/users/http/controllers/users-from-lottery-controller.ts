import type { Request, Response } from 'express';
import type {
  GetUsersFromLotteryRoute,
  GetUsersFromLotteryResponse,
} from '../../contracts/get-users-from-lottery-contract';
import { HttpErrorHandler } from '@/utils/http-error-handler';
import { getUsersFromLotteryService } from '../../services/get-users-from-lottery-service';
import { PrismaUsersRepository } from '../../repositories/implementations/prisma-users-repository';
import { PrismaLotteriesRepository } from '@/entities/lotteries/repositories/implementations/prisma-lotteries-repository';

type GetRequest = Request<GetUsersFromLotteryRoute>;
type GetResponse = Response<GetUsersFromLotteryResponse>;

const usersRepository = new PrismaUsersRepository();
const lotteriesRepository = new PrismaLotteriesRepository();

export class UsersFromLotteryController {
  @HttpErrorHandler()
  async get(request: GetRequest, response: GetResponse) {
    const { lottery_id } = request.params;

    const employees = await getUsersFromLotteryService({
      data: {
        lottery_id,
      },
      deps: {
        lotteriesRepository,
        usersRepository,
      },
    });

    response.json(employees);
  }
}
