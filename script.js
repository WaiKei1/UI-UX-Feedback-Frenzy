const roastFeedbacks = [
  "Is that Comic Sans? Bold choice.",
  "Your button looks like it's hiding from users.",
  "UX stands for 'Unintended X-perience'?",
  "This layout makes me dizzy, in a bad way.",
  "I've seen better contrast on a foggy day.",
];

const cuteFeedbacks = [
  "Awww your UI is like a baby duckling! 🐣",
  "Such round corners! I wanna hug it!",
  "Sooo adorable it makes me wanna squeal 💖",
  "This design is fluffier than a cloud!",
  "Your colors make me want to smile all day!",
];

const helpfulFeedbacks = [
  "Consider more padding around your text.",
  "Try aligning that button with your form field.",
  "Think about adding hover states for better UX.",
  "Increase font size for better readability.",
  "Add some whitespace to reduce clutter.",
];

const faces = {
  roast: "😈",
  cute: "🥺",
  helpful: "🤓",
};

const emojisByType = {
  roast: ["🔥", "💥", "👹"],
  cute: ["💖", "🌸", "🐰"],
  helpful: ["💡", "🧠", "✨"],
};

let selectedLabel = "general";

function giveFeedback(type, button) {
  const feedbackEl = document.getElementById("feedbackBubble");
  const faceEl = document.getElementById("feedbackFace");
  const labelEl = document.getElementById("labelTag");
  const body = document.body;

  // Update feedback bubble & face
  feedbackEl.innerText = "Typing...";
  faceEl.innerText = faces[type];
  selectedLabel = type;
  labelEl.className = "label-tag " + type;
  labelEl.innerText = `[${type.toUpperCase()}]`;

  // Change body background color based on type
  if (type === "roast") {
    body.style.backgroundColor = "#ffede8";
  } else if (type === "cute") {
    body.style.backgroundColor = "#fff0f6";
  } else if (type === "helpful") {
    body.style.backgroundColor = "#e0f7f6";
  } else {
    body.style.backgroundColor = "#fffbe6"; // default
  }

  // Add bounce animation to clicked button
  button.classList.add("bounce");
  setTimeout(() => {
    button.classList.remove("bounce");
  }, 600);

  // Start emoji rain
  startEmojiRain(type);

  // Show random feedback after delay
  setTimeout(() => {
    let feedback;
    if (type === "roast") {
      feedback =
        roastFeedbacks[Math.floor(Math.random() * roastFeedbacks.length)];
    } else if (type === "cute") {
      feedback =
        cuteFeedbacks[Math.floor(Math.random() * cuteFeedbacks.length)];
    } else {
      feedback =
        helpfulFeedbacks[Math.floor(Math.random() * helpfulFeedbacks.length)];
    }
    feedbackEl.innerText = feedback;
  }, 1200);
}

function startEmojiRain(type) {
  const emojiRain = document.getElementById("emoji-rain");
  emojiRain.innerHTML = "";
  const emojis = emojisByType[type];

  for (let i = 0; i < 10; i++) {
    const emoji = document.createElement("div");
    emoji.className = "emoji";
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.left = Math.random() * 100 + "vw";
    emoji.style.animationDuration = 2000 + Math.random() * 3000 + "ms";
    emojiRain.appendChild(emoji);

    setTimeout(() => emoji.remove(), 5000);
  }
}

const uploadInput = document.getElementById("upload");
const preview = document.getElementById("preview");
const confirmBtn = document.getElementById("confirmBtn");
const communityDesign = document.getElementById("communityDesign");

uploadInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (file) {
    preview.src = URL.createObjectURL(file);
    confirmBtn.disabled = false;
  }
});

confirmBtn.addEventListener("click", () => {
  alert("Design uploaded successfully!");
  communityDesign.src = preview.src;
  confirmBtn.disabled = true;
  uploadInput.value = "";
  preview.src = "";
});

const toggleViewBtn = document.getElementById("toggleViewBtn");
const communityFeed = document.getElementById("communityFeed");

toggleViewBtn.addEventListener("click", () => {
  communityFeed.classList.toggle("hidden");
  toggleViewBtn.textContent = communityFeed.classList.contains("hidden")
    ? "View Designs"
    : "Hide Designs";
});

document.getElementById("sendFeedbackBtn").addEventListener("click", () => {
  const input = document.getElementById("userFeedbackInput");
  const feedbackList = document.getElementById("feedbackList");

  if (input.value.trim()) {
    const labelText = selectedLabel ? selectedLabel.toUpperCase() : "GENERAL";
    const entry = document.createElement("p");
    entry.innerHTML = `<strong>[${labelText}]</strong> ${input.value}`;
    feedbackList.appendChild(entry);
    input.value = "";
  }
});

// Attach click handlers with button elements to pass for bounce
document.getElementById("roastBtn").addEventListener("click", function () {
  giveFeedback("roast", this);
});
document.getElementById("cuteBtn").addEventListener("click", function () {
  giveFeedback("cute", this);
});
document.getElementById("helpfulBtn").addEventListener("click", function () {
  giveFeedback("helpful", this);
});
