export interface SafesRepository {
  findByLotteryId: (lottery_id: string) => Promise<Safe | null>;
  updateValue: (updateData: UpdateSafeValueDTO) => Promise<Safe>;
}
