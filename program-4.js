const numbers = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30];

// Initialize result object for 1 to 9
const result = {};
for (let i = 1; i <= 9; i++) {
  result[i] = 0;
}

// Loop through numbers and check divisibility
numbers.forEach((num) => {
  for (let i = 1; i <= 9; i++) {
    if (num % i === 0) {
      result[i]++;
    }
  }
});

console.log("Output:", result);
