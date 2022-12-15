const quoteElement = document.querySelector(".quote");

function updateQuote() {
  fetch("https://api.kanye.rest")
    .then((res) => console.log(res.json()))
    .then((data) => {
      quoteElement.textContent = data.quote;
    });
}

const button = document.querySelector(".header__btn");
button.addEventListener("click", updateQuote);
