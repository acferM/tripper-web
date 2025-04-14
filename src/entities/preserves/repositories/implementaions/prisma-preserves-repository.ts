import { prisma } from '@/singletons/prisma';
import type {
  PreserveOptionalKeys,
  PreservesRepository,
  PreserveWithRelations,
  RelationsOptions,
} from '../preserves-repository';

export class PrismaPreservesRepository implements PreservesRepository {
  async findById<Keys extends PreserveOptionalKeys>(
    id: string,
    options: RelationsOptions | undefined,
  ) {
    const preserve = (await prisma.preserve.findUnique({
      where: {
        id,
      },
      include: options,
    })) as PreserveWithRelations<Keys> | null;

    return preserve;
  }

  async createPassage({ preserve_id, value }: CreatePassageDTO) {
    const passage = await prisma.preservePassages.create({
      data: {
        value,
        preserve: {
          connect: {
            id: preserve_id,
          },
        },
      },
    });

    return passage;
  }

  async updateValue({ preserve_id, operation, value }: UpdatePreserveValueDTO) {
    const updatedPreserve = await prisma.preserve.update({
      where: {
        id: preserve_id,
      },
      data: {
        value: {
          [operation]: value,
        },
      },
    });

    return updatedPreserve;
  }
}
