type Lottery = {
  id: string;
  name: string;

  employement?: LotteryEmployees;
  preserve?: Preserve;
  safe?: Safe;
  registers?: Register[];

  created_at: Date;
  updated_at: Date;
};
