import { env } from '@/env';
import { sign, verify } from 'jsonwebtoken';

type SignPayload = Record<string | number | symbol, unknown>;

type VerifyPayload = {
  name: string;
  role: UserRoles;
  sub: string;
};

export const jwt = {
  sign: (payload: SignPayload, subject: string) =>
    sign(payload, env.JWT_SECRET, { expiresIn: env.JWT_EXPIRE, subject }),
  verify: (token: string) => verify(token, env.JWT_SECRET) as VerifyPayload,
};

export type JWT = typeof jwt;
