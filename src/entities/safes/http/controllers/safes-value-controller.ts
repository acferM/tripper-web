import type { Request, Response } from 'express';
import type {
  AddValueToSafeBody,
  AddValueToSafeRoute,
} from '../../contracts/add-value-to-safe-contract';
import { addValueToSafeService } from '../../services/add-value-to-safe-service';
import { PrismaSafesRepository } from '../../repositories/implementations/prisma-safes-repository';
import { HttpErrorHandler } from '@/utils/http-error-handler';

type UpdateRequest = Request<AddValueToSafeRoute, unknown, AddValueToSafeBody>;
type UpdateResponse = Response<Safe>;

const safesRepository = new PrismaSafesRepository();

export class SafesValueController {
  @HttpErrorHandler()
  async update(request: UpdateRequest, response: UpdateResponse) {
    const { safe_id } = request.params;
    const { value } = request.body;

    const safe = await addValueToSafeService({
      data: {
        safe_id,
        value,
      },
      deps: {
        safesRepository,
      },
    });

    response.json(safe);
  }
}
