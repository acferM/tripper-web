import type { CreateRegisterBody } from '@/entities/contracts/create-register-contract'
import { HttpErrorHandler } from '@/utils/http-error-handler'
import type { Request, Response } from 'express'
import { CreateRegisterService } from '../../services/create-register-service'
import { PrismaUsersRepository } from '@/entities/users/repositories/implementations/prisma-users-repository'
import { PrismaRegisterRepository } from '../../repositories/implementations/prisma-registers-repository'
import { PrismaLotteriesRepository } from '@/entities/lotteries/repositories/implementations/prisma-lotteries-repository'

type CreateRequest = Request<unknown, unknown, CreateRegisterBody>
type CreateResponse = Response<RegisterWithoutOperatorPassword>

const registersRepository = new PrismaRegisterRepository()
const usersRepository = new PrismaUsersRepository()
const lotteriesRepository = new PrismaLotteriesRepository()

export class RegistersController {
  @HttpErrorHandler()
  async create(request: CreateRequest, response: CreateResponse) {
    const { lottery_id, operator_id } = request.body

    const register = await CreateRegisterService({
      data: {
        lottery_id,
        operator_id
      },
      deps: {
        registersRepository,
        lotteriesRepository,
        usersRepository
      }
    })

    response.status(201).json(register)
  }
}
