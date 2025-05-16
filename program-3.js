// Import readline to get user input
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question("Enter a number (a): ", (input) => {
    let a = parseInt(input);
  
    // If even, reduce by 1
    if (a % 2 === 0) {
      a = a - 1;
    }
  
    let result = [];
  
    for (let i = 0; i < a; i++) {
      result.push(2 * i + 1); // 1, 3, 5, 7, ...
    }
  
    console.log("Output:", result.join(", "));
    readline.close();
  });
  