import { z } from 'zod';

const addValueToSafeRoute = z.object({
  safe_id: z.string().uuid(),
});

const addValueToSafeBody = z.object({
  value: z.number().nonnegative(),
});

export type AddValueToSafeRoute = z.infer<typeof addValueToSafeRoute>;
export type AddValueToSafeBody = z.infer<typeof addValueToSafeBody>;
