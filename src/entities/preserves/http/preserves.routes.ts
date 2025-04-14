import { Router } from 'express';
import { PreservePassagesController } from './controllers/preserve-passages-controller';

const preservePassagesController = new PreservePassagesController();

export const preservesRouter = Router();

preservesRouter.post('/passages', preservePassagesController.create);
