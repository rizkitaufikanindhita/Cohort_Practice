/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

const wait = (n) => {
  return new Promise((resolve) => {
    console.log(`Silahkan menunggu dalam ${n / 1000} detik`);
    setTimeout(resolve, n);
  });
};

// wait(3000).then(() => {
//   console.log("Terima kasih sudah menunggu");
// });

const a = async () => {
  await wait(3000);
  console.log("Terima kasih sudah menunggu");
};

a();
