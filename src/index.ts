import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Criando um novo usuário
  const newUser = await prisma.user.create({
    data: {
      name: "Guilherme",
      email: "email@example.com",
    },
  });

  console.log("Novo usuário criado:", newUser);

  // Buscando todos os usuários
  const allUsers = await prisma.user.findMany();
  console.log("Todos os usuários:", allUsers);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
