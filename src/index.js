function displayPoem(response) {
  const poemAreaElement = document.querySelector("#poem-area");
  poemAreaElement.classList.remove("hidden");
  poemAreaElement.classList.add("visible");

  new Typewriter("#poem-text", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "✨",
    delay: 100,
  });

  const verseJoyButton = document.querySelector("#versejoy-button");
  verseJoyButton.value = "✨ Compose VerseJoy";
  verseJoyButton.disabled = false;
}

function generatePoem(event) {
  event.preventDefault();
  let instructions = document.querySelector("#instruction");
  const apiKey = "c3ae07f646b904bce9d83oat69c5764d";
  let prompt = `User instructions: Write a positive, meaningful, inspiring, and hopeful cinquain poem about "${instructions.value}". Aim to provide a quick dose of positivity and a moment of calm reflection to the reader.`;
  const context =
    "You are an expert in helping people fall in love with the world, and in lifting people's spirits. You love to write cinquain poems. Your mission is to write a cinquain poem, separate each line with line break <br>, do not include a title, make sure to follow the user instructions. For example: Light shines,<br>Warm morning glow,<br>New day's gentle promise,<br>Hope dawns with every sunrise, bright,<br>Behold.";
  const apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  const verseJoyButton = document.querySelector("#versejoy-button");
  verseJoyButton.value = "✨ Composing…";
  verseJoyButton.disabled = true;
  axios.get(apiURL).then(displayPoem);
}

const formElement = document.querySelector("#poem-form");
formElement.addEventListener("submit", generatePoem);

function copyText(event) {
  event.preventDefault();
  const copyTextElement = document
    .querySelector("#poem-text")
    .textContent.replace(/,/gi, ", ");
  navigator.clipboard.writeText(copyTextElement);
  event.target.innerHTML = "Copied! 🎉";
  event.target.classList.add("copied");
}

const copyButton = document.querySelector("#copyBtn");
copyButton.addEventListener("click", copyText);
