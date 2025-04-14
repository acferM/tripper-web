export interface SafesRepository {
  findById: (id: string) => Promise<Safe | null>;
  findByLotteryId: (lottery_id: string) => Promise<Safe | null>;
  updateValue: (updateData: UpdateSafeValueDTO) => Promise<Safe>;
}
