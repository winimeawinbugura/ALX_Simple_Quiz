// Function to check the user's answer
function checkAnswer() {
    // Step 1: Correct answer
    const correctAnswer = "4";

    // Step 2: Retrieve the selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Prevent errors if nothing is selected
    if (!selectedOption) {
        document.getElementById("feedback").textContent = "Please select an answer.";
        return;
    }

    const userAnswer = selectedOption.value;

    // Step 3: Compare answers
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
}

// Step 4: Add event listener to the button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
