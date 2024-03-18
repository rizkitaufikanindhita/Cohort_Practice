type User = {
  email: string;
  firstName: string;
  lastName: string;
  age: number;
};

const data: User = {
  email: "rizki@gmail.com",
  firstName: "rizki",
  lastName: "anindhita",
  age: 29,
};

const isLegalNew = (user: User): boolean => {
  return user.age > 19 ? true : false;
};

console.log(isLegalNew(data));

// perbedaa interface dan type
// interface bisa dipakai pada class dengan implement sedangkan type tidak bisa
// type ada union dan intersection sedangkan interface tidak ada
