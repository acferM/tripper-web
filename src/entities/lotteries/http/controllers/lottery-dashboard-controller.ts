import type { Request, Response } from 'express';
import type {
  GetLotteryDashboardRoute,
  getLotteryDashboardResponse,
} from '../../contracts/get-lottery-dashboard-contract';
import { getLotteryDashboardService } from '../../services/get-lottery-dashboard-service';
import { PrismaLotteriesRepository } from '../../repositories/implementations/prisma-lotteries-repository';
import { HttpErrorHandler } from '@/utils/http-error-handler';

type GetRequest = Request<GetLotteryDashboardRoute>;
type GetResponse = Response<getLotteryDashboardResponse>;

const lotteriesRepository = new PrismaLotteriesRepository();

export class LotteriesDashboardController {
  @HttpErrorHandler()
  async get(request: GetRequest, response: GetResponse) {
    const { lottery_id } = request.params;

    const dashboard = await getLotteryDashboardService({
      data: {
        lottery_id,
      },
      deps: {
        lotteriesRepository,
      },
    });

    response.json(dashboard);
  }
}
