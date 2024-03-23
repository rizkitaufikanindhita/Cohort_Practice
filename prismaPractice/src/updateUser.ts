import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

type dataType = {
  firstName: string;
  lastName: string;
};

const updateUser = async (id: string, { firstName, lastName }: dataType) => {
  const userData = await prisma.user.update({
    where: { id },
    data: {
      firstName: firstName,
      lastName: lastName,
    },
    select: {
      id: true,
      username: true,
      firstName: true,
      lastName: true,
    },
  });
  console.log(userData);
};

updateUser("clu44r37b00009mr9y05im4h9", {
  firstName: "rizki",
  lastName: "anindhita",
});
