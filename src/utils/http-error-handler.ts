import { AppError } from '@/error/AppError'
import type { Request, Response } from 'express'

type HttpMethodParams = [Request, Response, ...unknown[]]

export function HttpErrorHandler() {
  return function (_: unknown, __: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value

    descriptor.value = async function (...args: HttpMethodParams) {
      const [, response] = args

      try {
        const result = await originalMethod.apply(this, args)

        return result
      } catch (err) {
        if (err instanceof AppError) {
          return response.status(err.code).json({
            message: err.message,
            statusCode: err.code,
          })
        }

        console.log(err)

        return response.status(500).json({
          message: 'Internal server error',
          statusCode: 500,
        })
      }
    }

    return descriptor
  }
}
