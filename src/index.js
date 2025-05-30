function displayPoem(event) {
  event.preventDefault();
  const poemAreaElement = document.querySelector("#poem-area");
  poemAreaElement.classList.add("visible");
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
