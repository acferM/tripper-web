type UserRoles = 'manager' | 'employee';

type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: UserRoles;

  ownedLottery?: Lottery;
  // register
  // cashClosings
  // preserveTransactions

  created_at: Date;
  updated_at: Date;
};

type LotteryEmployees = {
  id: string;
  lottery: Lottery;
  users: User[];

  created_at: Date;
  updated_at: Date;
};
