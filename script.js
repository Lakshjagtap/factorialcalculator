// Handle Calculation
document.getElementById("calculateBtn").addEventListener("click", async () => {
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

  // Make API Request to the backend
  try {
      const response = await fetch("http://localhost:5000/api/factorial", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ number, method }),
      });

      const data = await response.json();

      // Handle non-OK responses (e.g., validation errors)
      if (!response.ok) {
          errorDiv.textContent = data.error || "An error occurred.";
      } else {
          // Add animation class dynamically
          resultDiv.classList.add("result");
          errorDiv.classList.add("error");

          // Display Result
          resultDiv.textContent = `The factorial of ${number} (${method} method) is ${data.result}.`;
      }
  } catch (error) {
      // Handle network or server errors
      errorDiv.textContent = "Server error. Please try again later.";
  }
});
