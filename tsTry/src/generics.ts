const findFirst = <T>(data: T[]) => {
  return data[0];
};

const dataSatu = findFirst<string>(["RIZKI", "TAUFIK", "ANINDHITA"]);
console.log(dataSatu.toLowerCase());

console.log(findFirst<number>([4, 3, 1, 2, 1, 5]));

console.log(findFirst<number | string>([7, 3, 1, 2, 1, "5", "10"]));

// mengenerickan datanya
// jadi bisa dikasih batasan dan syarat sendiri terkait dengan tipe datanya
// tipe data bisa dikasih kemudian saat execute function
// lebih safety dari any
// < > bisa dikasih, bisa juga tidak (sama saja)
