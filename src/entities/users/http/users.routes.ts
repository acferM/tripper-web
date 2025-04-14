import { Router } from 'express';
import { UsersController } from './controllers/users-controller';
import { UsersAuthenticationController } from './controllers/users-authentication-controller';
import { UsersFromLotteryController } from './controllers/users-from-lottery-controller';

export const usersRouter = Router();

const usersController = new UsersController();
const usersAuthenticationController = new UsersAuthenticationController();
const usersFromLotteryController = new UsersFromLotteryController();

usersRouter.post('/', usersController.create);

usersRouter.post('/sign-in', usersAuthenticationController.create);

usersRouter.get('/:lottery_id', usersFromLotteryController.get);
