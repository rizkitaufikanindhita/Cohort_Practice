"use strict";
class Employee {
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    }
}
const CEO = new Employee("rizki", 29);
CEO.greet("Hi there");
console.log(CEO.name);
console.log(CEO.age);
