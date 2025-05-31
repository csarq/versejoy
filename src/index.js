function displayPoem(event) {
  event.preventDefault();
  const poemAreaElement = document.querySelector("#poem-area");
  poemAreaElement.classList.add("visible");

  new Typewriter("#poem-text", {
    strings: `Joyful,<br>
        A simple verse,<br>
        Words dance with hopeful light,<br>
        Bringing smiles and warmth to fill your day,<br>
        Be well.`,
    autoStart: true,
    cursor: "✨",
    delay: 100,
  });
}

const formElement = document.querySelector("#poem-form");
formElement.addEventListener("submit", displayPoem);

function copyText(event) {
  event.preventDefault();
  const copyTextElement = document.querySelector("#poem-text").innerHTML;
  navigator.clipboard.writeText(copyTextElement);
  event.target.innerHTML = "Copied! 🎉";
  event.target.classList.add("copied");
}

const copyButton = document.querySelector("#copyBtn");
copyButton.addEventListener("click", copyText);
