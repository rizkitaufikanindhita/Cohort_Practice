/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
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
  wait1(t1)
    .then((data) => {
      console.log(data);
      return wait2(t2);
    })
    .then((data) => {
      console.log(data);
      return wait3(t3);
    })
    .then((data) => {
      console.log(data);
    });
}

calculateTime(1, 2, 3);

// module.exports = calculateTime;
