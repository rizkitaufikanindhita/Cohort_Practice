const a = [1, 2, 3, 4, 5];

const b = a.filter((e) => {
  return e % 2 == 0;
});

console.log(b);

console.log("------------------");

const nama = ["rizki", "taufik", "anindhita"];

const namaFiltered = nama.filter((e) => {
  return e.length > 6;
});

console.log(namaFiltered);
