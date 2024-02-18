const a = "rizki taufik anindhita taufik";

console.log(a.lastIndexOf("taufik"));

let sliceA = a.slice(23, 29);
console.log(sliceA);

let replaceA = a.replace("anindhita", "reysa");
console.log(replaceA);

let split = a.split(" ");
console.log(split);

let intA = "2";
let intB = parseInt(intA);
console.log(intB);
console.log(typeof intB);

let angka = [1, 2, 3];
let angkaNew = [];
angka.forEach((data, index) => {
  angkaNew.push(data * 5);
});
console.log(angkaNew);

class manusia {
  constructor(nama, alamat) {
    this.nama = nama;
    this.alamat = alamat;
  }

  identitas() {
    console.log(`${this.nama} beralamat di ${this.alamat}`);
  }

  static myType() {
    console.log("hanya bisa dipanggil langsung oleh class");
  }
}

let rizki = new manusia("rizki", "kramat jati");
rizki.identitas();

let sahla = new manusia("sahla", "dukuh");
sahla.identitas();

manusia.myType();

const users = '{"nama" : "rizki", "umur": 28}';

const usersObject = JSON.parse(users);
console.log(usersObject);
console.log(typeof usersObject);
console.log(usersObject["nama"]);

const usersString = JSON.stringify(usersObject);
console.log(usersString);
console.log(typeof usersString);

const obj = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

console.log(Object.keys(obj));
console.log(Object.entries(obj));
console.log(obj);
console.log(obj.hasOwnProperty("car"));
console.log(Object.assign(obj, { name: "rizki" }));
console.log(obj.hasOwnProperty("name"));

const square = (n) => {
  return n * n;
};
const cubic = (n) => {
  return n * n * n;
};

const hitung = (a, fn) => {
  return fn(a);
};

console.log(hitung(10, square));
console.log(hitung(10, cubic));

console.log(
  hitung(5, (n) => {
    return n * n;
  })
);
