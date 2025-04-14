export type PreserveOptionalKeys = OptionalKeys<Preserve>;

export type RelationsOptions = {
  passages?: boolean;
};

export type PreserveWithRelations<
  RelationsKeys extends PreserveOptionalKeys = never,
> = AddRelations<Preserve, RelationsKeys>;

export interface PreservesRepository {
  findById: <Keys extends PreserveOptionalKeys>(
    preserve_id: string,
    options?: RelationsOptions,
  ) => Promise<PreserveWithRelations<Keys> | null>;
  createPassage: (passageData: CreatePassageDTO) => Promise<PreservePassage>;
  updateValue: (updateData: UpdateValueDTO) => Promise<Preserve>;
}
