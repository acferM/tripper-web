import { z } from 'zod'

const createRegisterBody = z.object({
  lottery_id: z.string(),
  operator_id: z.string()
})

export type CreateRegisterBody = z.infer<typeof createRegisterBody>
