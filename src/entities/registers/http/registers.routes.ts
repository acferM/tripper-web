import { Router } from "express";
import { RegistersController } from "./controllers/registers-controller";

const registersController = new RegistersController()

export const registersRouter = Router()

registersRouter.post('/', registersController.create)
