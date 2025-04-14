import type { Request, Response } from 'express';
import type { GetSafeRoute } from '../../contracts/get-safe-contract';
import { getSafeService } from '../../services/get-safe-service';
import { PrismaSafesRepository } from '../../repositories/implementations/prisma-safes-repository';

type GetRequest = Request<GetSafeRoute>;
type GetResponse = Response<Safe>;

const safesRepository = new PrismaSafesRepository();

export class SafesController {
  async get(request: GetRequest, response: GetResponse) {
    const { lottery_id } = request.params;

    const safe = await getSafeService({
      data: {
        lottery_id,
      },
      deps: {
        safesRepository,
      },
    });

    response.json(safe);
  }
}
