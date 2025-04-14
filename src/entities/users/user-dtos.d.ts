type CreateUserDTO = {
  lotteryEmployement_id: string;
} & Omit<User, 'id' | 'ownedLottery' | 'created_at' | 'updated_at'>;
