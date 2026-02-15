// Chatbot Logic
const sendButton = document.getElementById("send-button");
const userInput = document.getElementById("user-input");
const robotText = document.getElementById("robot-text");

// Predefined responses
const responses = {
  hello: "Hi there, human! How can I assist you today?",
  help: "I'm here to help! Ask me anything about My AI World.",
  who: "I am your futuristic companion, built to guide you in this AI world.",
  goodbye: "Goodbye, traveler. May your journey be safe!",
  default: "I'm sorry, I don't understand that. Can you try asking differently?",
};

// Function to generate a response
function getResponse(input) {
  input = input.toLowerCase();
  if (responses[input]) {
    return responses[input];
  } else {
    return responses.default;
  }
}

// Event listener for the send button
sendButton.addEventListener("click", () => {
  const userMessage = userInput.value.trim();
  if (userMessage.length > 0) {
    const reply = getResponse(userMessage);
    robotText.innerHTML = `<p>${reply}</p>`;
    userInput.value = ""; // Clear the input field
  }
});