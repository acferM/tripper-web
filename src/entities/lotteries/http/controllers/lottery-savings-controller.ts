import type { Request, Response } from 'express';
import type {
  GetLotterySavingsResponse,
  GetLotterySavingsRoute,
} from '../../contracts/get-lottery-savings-contract';
import { getLotterySavingsService } from '../../services/get-lottery-savings-service';
import { PrismaLotteriesRepository } from '../../repositories/implementations/prisma-lotteries-repository';
import { HttpErrorHandler } from '@/utils/http-error-handler';

type GetRequest = Request<GetLotterySavingsRoute>;
type GetResponse = Response<GetLotterySavingsResponse>;

const lotteriesRepository = new PrismaLotteriesRepository();

export class LotterySavingsController {
  @HttpErrorHandler()
  async get(request: GetRequest, response: GetResponse) {
    const { lottery_id } = request.params;

    const savings = await getLotterySavingsService({
      data: { lottery_id },
      deps: {
        lotteriesRepository,
      },
    });

    console.log('aqui');

    response.json(savings);
  }
}
