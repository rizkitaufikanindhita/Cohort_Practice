import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

type userType = {
  username: string;
  firstName: string;
  lastName: string;
};

const addUser = async ({ username, firstName, lastName }: userType) => {
  const result = await prisma.user.create({
    data: {
      username,
      firstName,
      lastName,
    },
    select: {
      id: true,
      username: true,
    },
  });

  console.log(result);
};

addUser({
  username: "rizki@gmail.com",
  firstName: "joko",
  lastName: "tong tong",
});
