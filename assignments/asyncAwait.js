const a = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hi Mars");
    }, 2000);
  });
};

const b = async () => {
  const value = await a();
  console.log(value);
};

console.log("nunggu 2 detik...");
b();

// async await digunakan dicaller untuk menggantikan .then jadi masih menggunakan promise hanya menggantikan .then
