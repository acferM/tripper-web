import { compareSync, hashSync } from 'bcrypt';

export const encryption = {
  hash: (payload: string) => hashSync(payload, 10),
  compare: compareSync,
};

export type Encryption = typeof encryption;
