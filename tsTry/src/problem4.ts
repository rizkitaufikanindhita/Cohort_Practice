const jumlah = (num1: number, num2: number): number => {
  return num1 + num2;
};

// function with setTimeout
const show = (funct: () => number, delay: number) => {
  setTimeout(() => {
    console.log(funct());
  }, delay);
};

show(() => jumlah(10, 16), 10000);
