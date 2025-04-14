import { AppError } from '@/error/AppError';
import type { PreservesRepository } from '../repositories/preserves-repository';

type CreatePreservePassageServiceParams = {
  data: {
    preserve_id: string;
    value: number;
  };
  deps: {
    preservesRepository: PreservesRepository;
  };
};

export async function createPreservePassageService({
  data,
  deps,
}: CreatePreservePassageServiceParams) {
  const { preservesRepository } = deps;

  const preserve = await preservesRepository.findById<'passages'>(
    data.preserve_id,
    { passages: true },
  );

  if (!preserve) {
    throw new AppError('Preserve not found', 404);
  }

  const [passage, updatedPreserve] = await Promise.all([
    preservesRepository.createPassage({
      preserve_id: preserve.id,
      value: data.value,
    }),
    preservesRepository.updateValue({
      preserve_id: preserve.id,
      operation: 'decrement',
      value: data.value,
    }),
  ]);

  const difference = preserve.value - passage.value;

  return {
    preserve: updatedPreserve,
    passage,
    difference,
  };
}
