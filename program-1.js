class Calculator {
    constructor(a, b, operation) {
      this.a = parseFloat(a);
      this.b = parseFloat(b);
      this.operation = operation.toLowerCase();
    }
  
    calculate() {
      switch (this.operation) {
        case "add":
          return this.a + this.b;
        case "sub":
          return this.a - this.b;
        case "mul":
          return this.a * this.b;
        case "div":
          return this.b !== 0 ? this.a / this.b : "❌ Cannot divide by zero";
        default:
          return "❌ Invalid operation";
      }
    }
  }
  
  // Input from user
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question("Enter first number (a): ", (a) => {
    readline.question("Enter second number (b): ", (b) => {
      readline.question("Enter operation (add, sub, mul, div): ", (op) => {
        const calc = new Calculator(a, b, op);
        console.log("Result:", calc.calculate());
        readline.close();
      });
    });
  });
  