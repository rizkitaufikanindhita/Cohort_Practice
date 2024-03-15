interface UserType {
  username: string;
  age: number;
  firstname: string;
  lastname: string;
}

const isLegalNew = (user: UserType): boolean => {
  return user.age > 18 ? true : false;
};

const rizki = {
  username: "rizki",
  age: 29,
  firstname: "rizki",
  lastname: "anindhita",
};

console.log(isLegalNew(rizki));
