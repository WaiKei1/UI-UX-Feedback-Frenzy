const feedbackMessages = {
  roast: [
    "Wow. Helvetica again? Bold move.",
    "This looks like it came straight out of 2011.",
    "Even Comic Sans would be jealous."
  ],
  cute: [
    "Awww this is adorable! Love the round corners 💕",
    "Such a friendly design! Makes me wanna hug my screen.",
    "This UI is a ray of sunshine ☀️"
  ],
  helpful: [
    "Consider increasing contrast for better readability.",
    "Spacing could help group related items better.",
    "Try aligning buttons to reduce visual noise."
  ]
};

function generateFeedback() {
  const tone = document.getElementById('tone').value;
  const output = document.getElementById('output');
  output.innerHTML = ''; // Clear previous

  feedbackMessages[tone].forEach((msg, i) => {
    setTimeout(() => {
      const msgDiv = document.createElement('div');
      msgDiv.className = 'feedback-msg';
      msgDiv.innerText = msg;
      output.appendChild(msgDiv);
    }, i * 1500);
  });
}
