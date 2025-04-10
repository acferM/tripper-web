import { z } from 'zod';

const createUserAuthenticationBody = z.object({
  email: z.string().email(),
  password: z.string(),
});

export type CreateUserAuthenticationBody = z.infer<
  typeof createUserAuthenticationBody
>;

export type CreateUserAuthenticationResponse = {
  user: Omit<User, 'password'>;
  token: string;
};
