interface Person {
  name: string;
  age: number;
  greet(phrase: string): void;
}

class Employee implements Person {
  name: string;
  age: number;

  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }

  greet(phrase: string): void {
    console.log(`${phrase} ${this.name}`);
  }
}

const CEO = new Employee("rizki", 29);

CEO.greet("Hi there");
console.log(CEO.name);
console.log(CEO.age);

// perbedaan interfaces dan types
// interfaces bisa diimplementasikan dalam class sedangkan types tidak bisa
