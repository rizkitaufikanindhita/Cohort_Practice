interface User {
  id: number;
  name: string;
  age: number;
  email: string;
}

type userLogin = Pick<User, `name` | `email`>;

const login = (data: userLogin) => {
  console.log(`selamat datang kembali ${data.name} dengan email ${data.email}`);
};

login({
  name: "Rizki",
  email: "rizki@gmail.com",
});
