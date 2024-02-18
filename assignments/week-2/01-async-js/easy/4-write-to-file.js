// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");

const filePath = "week-2/01-async-js/easy/a.txt";

// fs.readFile(filePath, "utf-8", (err, data) => {
//   data = "helooooowwww";
// });

const data = "Hello From Jupyter";

fs.writeFile(filePath, data, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Berhasil diubah");
  }
});
