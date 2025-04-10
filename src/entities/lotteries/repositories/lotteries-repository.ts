export interface LotteriesRepository {
  findById: (id: string) => Promise<Lottery | null>;
}
