class rectangle {
  constructor(width, height) {
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

const kotakSatu = new rectangle(10, 30);
console.log(kotakSatu.luas());
console.log(kotakSatu.keliling());

const kotakDua = new rectangle(3, 176);
console.log(kotakDua.luas());
console.log(kotakDua.keliling());
