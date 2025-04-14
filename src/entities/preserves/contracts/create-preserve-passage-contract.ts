import { z } from 'zod';

const createPreservePassageBody = z.object({
  preserve_id: z.string().uuid(),
  value: z.number(),
});

export type CreatePreservePassageBody = z.infer<
  typeof createPreservePassageBody
>;
