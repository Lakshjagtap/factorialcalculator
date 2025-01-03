// Factorial Calculation Functions
function factorialIterative(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

function factorialRecursive(n) {
  if (n <= 1) return 1;
  return n * factorialRecursive(n - 1);
}

// Handle Calculation
document.getElementById("calculateBtn")?.addEventListener("click", () => {
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

// Section Navigation
function showSection(sectionId) {
  // Get all sections and remove 'active' class
  const sections = document.querySelectorAll(".section");
  sections.forEach(section => {
    section.classList.remove("active");
  });

  // Show the clicked section
  const targetSection = document.getElementById(sectionId);
  targetSection.classList.add("active");

  // Close the hamburger menu if it's visible (for small screens)
  if (window.innerWidth <= 768) {
    document.querySelector("nav").classList.remove("active");
  }
}

// Hamburger Menu Toggle
document.getElementById("hamburger-menu")?.addEventListener("click", () => {
  document.querySelector("nav").classList.toggle("active");
});
