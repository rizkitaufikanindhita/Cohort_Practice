// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

// 1-counter
let date = new Date();

const counterCheck = () => {
  let detik = date.getSeconds();
  let menit = date.getMinutes();
  let jam = date.getHours();
  setInterval(() => {
    if (detik > 58) {
      detik = 0;
      menit = menit + 1;
    } else if (menit > 58) {
      menit = 0;
      jam = jam + 1;
    } else {
      detik++;
      console.log(`${jam}:${menit}:${detik}`);
    }
  }, 1000);
};

counterCheck();
