import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const showSpecificUser = async (id: string) => {
  const result = await prisma.user.findFirst({
    where: { id },
    select: {
      id: true,
      username: true,
    },
  });
  console.log(result);
};

showSpecificUser("clu3vsk2n0000vddyety8ylwk");
