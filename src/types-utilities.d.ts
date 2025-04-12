type MakeRequired<T, Keys extends keyof T> = Omit<T, Keys> &
  Required<Pick<T, Keys>>;

type OptionalKeys<T> = {
  // biome-ignore lint/complexity/noBannedTypes: <explanation>
  [Key in keyof T]-?: {} extends Pick<T, Key> ? Key : never;
}[keyof T];

type AddRelations<EntityType, Keys extends OptionalKeys<EntityType> = never> = [
  Keys,
] extends [never]
  ? Omit<EntityType, OptionalKeys<EntityType>>
  : MakeRequired<EntityType, Keys>;
