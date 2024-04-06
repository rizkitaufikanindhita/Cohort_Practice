interface UserNew {
  id: number;
  name: string;
}

const dataUser = new Map<string, UserNew>();

dataUser.set("user1", { id: 1, name: "rizki" });
dataUser.set("user2", { id: 2, name: "reysa" });
dataUser.set("user3", { id: 3, name: "sahla" });

console.log(dataUser.get("user3"));
