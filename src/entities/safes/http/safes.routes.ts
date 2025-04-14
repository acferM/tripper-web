import { Router } from 'express';
import { SafesController } from './controllers/safes-controller';

const safesController = new SafesController();

export const safesRouter = Router();

safesRouter.get('/:lottery_id', safesController.get);
