import { z } from 'zod';

const getLotterySavingsRoute = z.object({
  lottery_id: z.string(),
});

const getLotterySavingsResponse = z.object({
  safe: z.number(),
  preserve: z.number(),
});

export type GetLotterySavingsRoute = z.infer<typeof getLotterySavingsRoute>;
export type GetLotterySavingsResponse = z.infer<
  typeof getLotterySavingsResponse
>;
