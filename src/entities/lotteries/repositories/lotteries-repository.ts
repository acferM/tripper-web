export type LotteryOptionalKeys = OptionalKeys<Lottery>;

export type LotteryWithRelations<
  RelationsKeys extends LotteryOptionalKeys = never,
> = AddRelations<Lottery, RelationsKeys>;

export type RelationsOptions = {
  employement?: boolean;
  owner?: boolean;
  preserve?: boolean;
  safe?: boolean;
  registers?: boolean;
};

export interface LotteriesRepository {
  findById: <Keys extends LotteryOptionalKeys>(
    id: string,
    relations?: RelationsOptions,
  ) => Promise<LotteryWithRelations<Keys> | null>;
}
