import { z } from 'zod';

const getSafeRoute = z.object({
  lottery_id: z.string().uuid(),
});

export type GetSafeRoute = z.infer<typeof getSafeRoute>;
