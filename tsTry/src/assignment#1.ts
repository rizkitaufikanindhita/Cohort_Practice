interface userType {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
}

const rizki: userType = {
  firstName: "Rizki",
  lastName: "Anindhita",
  email: "rizki@gmail.com",
  age: 29,
};

const isLegalAge = (user: userType): boolean => {
  return user.age > 18 ? true : false;
};

console.log(isLegalAge(rizki));
