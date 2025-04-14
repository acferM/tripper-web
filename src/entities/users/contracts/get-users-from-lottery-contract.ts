import { z } from 'zod';

const getUsersFromLotteryRoute = z.object({
  lottery_id: z.string().uuid(),
});

export type GetUsersFromLotteryRoute = z.infer<typeof getUsersFromLotteryRoute>;
export type GetUsersFromLotteryResponse = User[];
