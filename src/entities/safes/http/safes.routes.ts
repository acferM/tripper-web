import { Router } from 'express';
import { SafesController } from './controllers/safes-controller';
import { SafesValueController } from './controllers/safes-value-controller';

const safesController = new SafesController();
const safesValueController = new SafesValueController();

export const safesRouter = Router();

safesRouter.get('/:lottery_id', safesController.get);

safesRouter.patch('/add/:safe_id', safesValueController.update);
