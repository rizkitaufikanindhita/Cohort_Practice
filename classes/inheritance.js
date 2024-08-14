class color {
  constructor(color) {
    this.color = color;
  }

  show() {
    console.log(this.color);
  }

  setColor(input) {
    this.color = input;
  }
}

class rectangle extends color {
  constructor(width, height, color) {
    super(color);
    this.width = width;
    this.height = height;
  }

  luas() {
    const area = this.width * this.height;
    return area;
  }

  keliling() {
    const perimeter = 2 * (this.width + this.height);
    return perimeter;
  }
}

const kotakSatu = new rectangle(45, 73, "blue");
console.log(kotakSatu.luas());
console.log(kotakSatu.keliling());
kotakSatu.show();
kotakSatu.setColor("yellow");
kotakSatu.show();
