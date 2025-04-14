import type { Request, Response } from 'express';
import type { CreatePreservePassageBody } from '../../contracts/create-preserve-passage-contract';
import { createPreservePassageService } from '../../services/create-preserve-passage-service';
import { PrismaPreservesRepository } from '../../repositories/implementaions/prisma-preserves-repository';

type CreateRequest = Request<unknown, unknown, CreatePreservePassageBody>;
type CreateResponse = Response<{ passage: PreservePassage }>;

const preservesRepository = new PrismaPreservesRepository();

export class PreservePassagesController {
  async create(request: CreateRequest, response: CreateResponse) {
    const { preserve_id, value } = request.body;

    const passage = await createPreservePassageService({
      data: {
        preserve_id,
        value,
      },
      deps: {
        preservesRepository,
      },
    });

    response.json(passage);
  }
}
