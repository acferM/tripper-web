import { registersRouter } from "@/entities/registers/http/registers.routes";
import { usersRouter } from "@/entities/users/http/users.routes";
import { Router } from "express";

export const appRoutes = Router()

appRoutes.use('/users', usersRouter)
appRoutes.use('/registers', registersRouter)
