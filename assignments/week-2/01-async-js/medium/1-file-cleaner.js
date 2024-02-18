// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require("fs");

let filePath = "week-2/01-async-js/medium/b.txt";

fs.readFile(filePath, "utf-8", (err, data) => {
  let result = data.replace(/\s+/g, " ");
  fs.writeFile(filePath, result, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  });
});
