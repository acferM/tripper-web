import { prisma } from '@/singletons/prisma';
import type { UsersRepository } from '../users-repository';

export class PrismaUsersRepository implements UsersRepository {
	async findById(id: string) {
		const user = await prisma.user.findUnique({
			where: {
				id,
			},
		});

		return user;
	}

	async findByEmail(email: string) {
		const user = await prisma.user.findUnique({
			where: {
				email,
			},
		});

		return user;
	}

	async create(userData: CreateUserDTO) {
		const user = await prisma.user.create({
			data: userData,
		});

		return user;
	}
}
