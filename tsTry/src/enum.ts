enum Direction {
  up = "keatas",
  down = "kebawah",
  right = "kekanan",
  left = "kekiri",
}

const arah = (keypress: Direction) => {
  if (keypress == Direction.up) {
    console.log(Direction.up);
  } else if (keypress == Direction.down) {
    console.log(Direction.down);
  } else if (keypress == Direction.right) {
    console.log(Direction.right);
  } else {
    console.log(Direction.left);
  }
};

arah(Direction.left);
