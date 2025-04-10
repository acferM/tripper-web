import { Router } from 'express';
import { UsersController } from './controllers/users-controller';
import { UsersAuthenticationController } from './controllers/users-authentication-controller';

export const usersRouter = Router();

const usersController = new UsersController();
const usersAuthenticationController = new UsersAuthenticationController();

usersRouter.post('/', usersController.create);

usersRouter.post('/sign-in', usersAuthenticationController.create);
