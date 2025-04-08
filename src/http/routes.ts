import { usersRouter } from "@/entities/users/http/users.routes";
import { Router } from "express";

export const appRoutes = Router()

appRoutes.use('/users', usersRouter)
