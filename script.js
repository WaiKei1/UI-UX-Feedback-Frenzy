const roastFeedbacks = [
  "Is that Comic Sans? Bold choice.",
  "Your button looks like it's hiding from users.",
  "UX stands for 'Unintended X-perience'?"
];

const cuteFeedbacks = [
  "Awww your UI is like a baby duckling! 🐣",
  "Such round corners! I wanna hug it!",
  "Sooo adorable it makes me wanna squeal 💖"
];

const helpfulFeedbacks = [
  "Consider more padding around your text.",
  "Try aligning that button with your form field.",
  "Think about adding hover states for better UX."
];

const faces = {
  roast: "😈",
  cute: "🥺",
  helpful: "🤓"
};

function giveFeedback(type) {
  const feedbackEl = document.getElementById("feedbackBubble");
  const faceEl = document.getElementById("feedbackFace");
  feedbackEl.innerText = "Typing...";
  faceEl.innerText = faces[type];

  setTimeout(() => {
    let feedback;
    if (type === "roast") {
      feedback = roastFeedbacks[Math.floor(Math.random() * roastFeedbacks.length)];
    } else if (type === "cute") {
      feedback = cuteFeedbacks[Math.floor(Math.random() * cuteFeedbacks.length)];
    } else {
      feedback = helpfulFeedbacks[Math.floor(Math.random() * helpfulFeedbacks.length)];
    }
    feedbackEl.innerText = feedback;
  }, 1000);
}

document.getElementById("upload").addEventListener("change", function (event) {
  const file = event.target.files[0];
  const preview = document.getElementById("preview");
  preview.src = URL.createObjectURL(file);
});
