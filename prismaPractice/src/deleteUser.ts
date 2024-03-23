import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const deleteUser = async (username: string) => {
  const result = await prisma.user.delete({ where: { username } });
  result ? console.log("delete berhasil") : console.log("gagal menghapus");
};

deleteUser("rizki@gmail.com");
