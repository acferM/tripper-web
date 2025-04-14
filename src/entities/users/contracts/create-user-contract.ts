import { z } from 'zod';

const userRole = z.enum(['manager', 'employee']);

const createUserBody = z.object({
  lottery_id: z.string().uuid(),
  name: z.string({ message: 'Name is required' }),
  email: z
    .string({ message: 'Email is rquired' })
    .email('email must be a valid email format'),
  password: z.string({ message: 'Password is required' }),
  role: userRole,
});

export type CreateUserBody = z.infer<typeof createUserBody>;
