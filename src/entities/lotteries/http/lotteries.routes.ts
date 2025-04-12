import { Router } from 'express';
import { LotteriesDashboardController } from './controllers/lottery-dashboard-controller';

const lotteriesDashboardController = new LotteriesDashboardController();

export const lotteriesRouter = Router();

lotteriesRouter.get('/dashboard/:lottery_id', lotteriesDashboardController.get);
