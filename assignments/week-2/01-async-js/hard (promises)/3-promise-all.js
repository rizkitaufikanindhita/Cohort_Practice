/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t1) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data Pertama");
    }, t1 * 1000);
  });
}

function wait2(t2) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data Kedua");
    }, t2 * 1000);
  });
}

function wait3(t3) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data Ketiga");
    }, t3 * 1000);
  });
}

function calculateTime(t1, t2, t3) {
  Promise.all([wait1(t1), wait2(t2), wait3(t3)]).then((data) => {
    console.log(data);
    console.log("Berhasil");
  });
}

calculateTime(1, 2, 3);

// module.exports = calculateTime;
