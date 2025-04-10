import { z } from 'zod';

const envSchema = z.object({
  DATABASE_URL: z.string(),

  JWT_SECRET: z.string(),
  JWT_EXPIRE: z.literal('1d'),
});

export const env = envSchema.parse(process.env);
