/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

// function sleep(milliseconds) {
// }

// module.exports = sleep;

const sleep = (n) => {
  return new Promise((resolve) => {
    console.log(`Silahkan menunggu ${n / 1000} detik`);
    setTimeout(resolve, n);
  });
};

// wait(3000).then(() => {
//   console.log("Terima kasih sudah menunggu");
// });

const a = async () => {
  await sleep(14000);
  console.log("Terima kasih sudah menunggu");
};

a();
