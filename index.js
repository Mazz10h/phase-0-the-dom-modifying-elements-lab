// Write your code here!
// Remove the <main id="main"> element from the DOM if it exists
const main = document.getElementById("main");
if (main) {
  main.remove();
}

// Create a new <h1> element
const newHeader = document.createElement("h1");

// Set its id to "victory"
newHeader.id = "victory";

// Set the text content
newHeader.textContent = "Nus is the champion"; // <-- Replace YOUR-NAME with your actual name

// Append the newHeader to the body
document.body.append(newHeader);
