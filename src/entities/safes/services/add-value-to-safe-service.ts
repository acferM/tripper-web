import { AppError } from '@/error/AppError';
import type { SafesRepository } from '../repositories/safes-repository';

type AddValueToSafeServiceParams = {
  data: {
    safe_id: string;
    value: number;
  };
  deps: {
    safesRepository: SafesRepository;
  };
};

export async function addValueToSafeService({
  data,
  deps,
}: AddValueToSafeServiceParams) {
  const { safesRepository } = deps;

  const safe = await safesRepository.findById(data.safe_id);

  if (!safe) {
    throw new AppError('Safe not found', 404);
  }

  const updatedSafe = await safesRepository.updateValue({
    safe_id: safe.id,
    operation: 'increment',
    value: data.value,
  });

  return updatedSafe;
}
