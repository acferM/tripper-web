import { lotteriesRouter } from '@/entities/lotteries/http/lotteries.routes';
import { preservesRouter } from '@/entities/preserves/http/preserves.routes';
import { registersRouter } from '@/entities/registers/http/registers.routes';
import { safesRouter } from '@/entities/safes/http/safes.routes';
import { usersRouter } from '@/entities/users/http/users.routes';
import { Router } from 'express';

export const appRoutes = Router();

appRoutes.use('/users', usersRouter);
appRoutes.use('/registers', registersRouter);
appRoutes.use('/lotteries', lotteriesRouter);
appRoutes.use('/preserves', preservesRouter);
appRoutes.use('/safes', safesRouter);
