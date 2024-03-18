type dataPegawai = {
  name: string;
  age: number;
};

interface dataPNS {
  name: string;
  address: string;
}

type dataSemua = dataPegawai & dataPNS;

const leader: dataSemua = {
  name: "Rizki",
  age: 29,
  address: "Jaktim",
};

console.log(leader.name);
console.log(leader.age);
console.log(leader.address);
