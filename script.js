document.addEventListener("DOMContentLoaded", function () {
  const alertMeDiv = document.getElementById("alert-me");
  const textInput = document.getElementById("textInput");
  const submitButton = document.getElementById("submitButton");
  const displayText = document.getElementById("displayText");

  alertMeDiv.addEventListener("click", function () {
    // Retrieve the contents of the text field
    const userInput = textInput.value.trim();

    if (userInput !== "") {
      // Show an alert with formatted content
      alert(`You Write : ${userInput}`);

      // Update text below button
      displayText.textContent = userInput;
    } else {
      alert("Please enter text in the input field.");
    }
  });

  submitButton.addEventListener("click", function () {
    // Retrieve the contents of the text field
    const userInput = textInput.value.trim();

    if (userInput !== "") {
      // Show an alert with formatted content
      alert(`You Write : ${userInput}`);

      // Update text below button
      displayText.textContent = userInput;
    } else {
      alert("Please enter text in the input field.");
    }
  });
});
