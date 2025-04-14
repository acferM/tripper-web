import { PrismaClient } from '@prisma/client';
import { hashSync } from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = hashSync('123456', 10);

  await prisma.lottery.create({
    data: {
      name: 'Loteria do japa',
      owner: {
        create: {
          email: 'matheusacfer@email.com',
          name: 'Matheus Owner',
          password: hashedPassword,
          role: 'manager',
        },
      },
      preserve: {
        create: {
          value: 0,
        },
      },
      safe: {
        create: {
          value: 0,
        },
      },
    },
  });
}

main()
  .then(async () => await prisma.$disconnect())
  .catch(async e => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });
