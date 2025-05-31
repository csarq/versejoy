function displayPoem(response) {
  const poemAreaElement = document.querySelector("#poem-area");
  poemAreaElement.classList.add("visible");

  new Typewriter("#poem-text", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "✨",
    delay: 100,
  });
}

function generatePoem(event) {
  event.preventDefault();
  let instructions = document.querySelector("#instruction");
  console.log(instructions.value);
  const apiKey = "c3ae07f646b904bce9d83oat69c5764d";
  let prompt = `User instructions: Write a positive, meaningful, inspiring, and hopeful cinquain poem about "${instructions.value}". Aim to provide a quick dose of positivity and a moment of calm reflection to the reader.`;
  const context =
    "You are an expert in helping people fall in love with the world, and in lifting people's spirits. You love to write cinquain poems. Your mission is to write a cinquain poem, separating each line with <br>, do not include a title, make sure to follow the user instructions too. Sprinkle in a couple of emojis.";
  const apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiURL).then(displayPoem);
}

const formElement = document.querySelector("#poem-form");
formElement.addEventListener("submit", generatePoem);

function copyText(event) {
  event.preventDefault();
  const copyTextElement = document.querySelector("#poem-text").innerHTML;
  navigator.clipboard.writeText(copyTextElement);
  event.target.innerHTML = "Copied! 🎉";
  event.target.classList.add("copied");
}

const copyButton = document.querySelector("#copyBtn");
copyButton.addEventListener("click", copyText);
