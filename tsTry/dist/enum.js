"use strict";
var Direction;
(function (Direction) {
    Direction["up"] = "keatas";
    Direction["down"] = "kebawah";
    Direction["right"] = "kekanan";
    Direction["left"] = "kekiri";
})(Direction || (Direction = {}));
const arah = (keypress) => {
    if (keypress == Direction.up) {
        console.log(Direction.up);
    }
    else if (keypress == Direction.down) {
        console.log(Direction.down);
    }
    else if (keypress == Direction.right) {
        console.log(Direction.right);
    }
    else {
        console.log(Direction.left);
    }
};
arah(Direction.left);
