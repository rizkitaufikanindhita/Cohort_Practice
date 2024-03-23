import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const showUser = async () => {
  const result = await prisma.user.findMany({
    select: {
      id: true,
      username: true,
      firstName: true,
      lastName: true,
    },
  });
  console.log(result);
};

showUser();
