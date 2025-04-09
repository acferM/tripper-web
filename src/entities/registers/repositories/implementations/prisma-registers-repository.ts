import { prisma } from '@/singletons/prisma';
import type { RegistersRepository } from '../registers-repository';

export class PrismaRegisterRepository implements RegistersRepository {
	async create({ lottery_id, operator_id }: CreateRegisterDTO) {
		const register = await prisma.register.create({
			data: {
				lottery: {
					connect: {
						id: lottery_id,
					},
				},
				operator: {
					connect: {
						id: operator_id,
					},
				},
			},
			include: {
				operator: true,
			},
		});

		return register;
	}
}
