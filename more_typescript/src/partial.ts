interface User {
  id: number;
  name: string;
  age: number;
  address: string;
  email: string;
  password: string;
}

// partial untuk kepentingan update
// karena tidak semua harus diupdate
// hanya sebagian saja

type userUpdate = Pick<User, `name` | `age` | `address` | `email`>;

type userUpdateOptional = Partial<userUpdate>;

const updateUser = (value: userUpdateOptional) => {
  // logic update user
};
