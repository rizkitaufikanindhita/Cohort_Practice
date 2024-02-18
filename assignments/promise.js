// const sum = () => {
//   counter = 0;
//   for (let i = 0; i < 100; i++) {
//     counter += i;
//   }
//   console.log(counter);
// };

// setTimeout(sum, 3000);
// console.log("Hello World");

// promise data disimpan di resolve dan akan digunakan pada fungsi setelah then

// const a = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("foo");
//     }, 2000);
//   });
// };

// console.log("tunggu 2 detik...");

// a().then((data) => {
//   console.log(data);
// }); // dapat datanya

// const a = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("foo");
//   }, 2000);
// });

// console.log("tunggu 2 detik...");
// a.then(() => {
//   console.log(a);
// });

// semua data yang ada di resolve akan diterima then

// function a ini untuk nunggu 2 detik (fungsinya hanya itu)
// const a = () => {
//   let p = new Promise((resolve) => {
//     setTimeout(resolve, 2000);
//   });
//   return p;
// };

// // dijalanin dulu a nya (untuk nunggu 2 detik) baru di console
// a().then(() => {
//   console.log("Hello Mars");
// });

// resolve akan diisi oleh function setelah then
const myOwnSetTimeout = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

myOwnSetTimeout(1000).then(() => {
  console.log("First Second Thing");
});

myOwnSetTimeout(2000).then(() => {
  console.log("Two Second Thing");
});

const b = async () => {
  await myOwnSetTimeout(3000);
  console.log("Three Second Thing");
};

b();

// console.log("1");
// const testPromise = () => {
//   console.log("3");
//   return new Promise((resolve) => {
//     console.log("4");
//     setTimeout(() => {
//       console.log("5");
//       resolve("Done I'm Burnt Out");
//     }, 3000);
//   });
// };

// console.log("2");
// testPromise().then((data) => {
//   console.log("6");
//   console.log(data);
// });
