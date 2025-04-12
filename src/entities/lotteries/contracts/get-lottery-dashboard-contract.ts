import { z } from 'zod';

const getLotteryDashboardRoute = z.object({
  lottery_id: z.string().uuid(),
});

const getLotteryDashboardResponse = z.object({
  safe: z.number(),
  preserve: z.number(),
  registers: z.number(),
});

export type GetLotteryDashboardRoute = z.infer<typeof getLotteryDashboardRoute>;
export type getLotteryDashboardResponse = z.infer<
  typeof getLotteryDashboardResponse
>;
