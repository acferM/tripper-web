import { Router } from 'express';
import { LotteryDashboardController } from './controllers/lottery-dashboard-controller';
import { LotterySavingsController } from './controllers/lottery-savings-controller';

const lotteryDashboardController = new LotteryDashboardController();
const lotterySavingsController = new LotterySavingsController();

export const lotteriesRouter = Router();

lotteriesRouter.get('/dashboard/:lottery_id', lotteryDashboardController.get);

lotteriesRouter.get('/savings/:lottery_id', lotterySavingsController.get);
