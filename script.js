// script.js
// Factorial Calculation Functions
function factorialIterative(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  
  function factorialRecursive(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorialRecursive(n - 1);
  }
  
  // Handle Calculation
  document.getElementById("calculateBtn").addEventListener("click", () => {
    const numberInput = document.getElementById("number").value;
    const method = document.getElementById("method").value;
    const resultDiv = document.getElementById("result");
    const errorDiv = document.getElementById("error");
  
    // Clear previous results
    resultDiv.textContent = "";
    errorDiv.textContent = "";
  
    // Validate Input
    const number = parseInt(numberInput);
    if (isNaN(number) || number < 0) {
      errorDiv.textContent = "Please enter a valid positive integer.";
      return;
    }
  
    // Calculate Factorial
    let result;
    if (method === "iterative") {
      result = factorialIterative(number);
    } else if (method === "recursive") {
      result = factorialRecursive(number);
    }
  
    // Display Result
    resultDiv.textContent = `The factorial of ${number} (${method} method) is ${result}.`;
  });
  