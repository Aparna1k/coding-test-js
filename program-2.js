// Read input from user
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question("Enter a number (a): ", (input) => {
    const a = parseInt(input);
    let result = [];
  
    for (let i = 0; i < a; i++) {
      result.push(2 * i + 1); // generates odd numbers: 1, 3, 5, 7, ...
    }
  
    console.log("Output:", result.join(", "));
    readline.close();
  });
  