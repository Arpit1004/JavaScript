const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quotehead");
const quoteAuthor = document.getElementById("quote-Author");
const btnNew = document.getElementById("NewQuoteButton");
const btnTwitter = document.getElementById("NewbtnTwitter");
const load = document.getElementById("loader");
console.log(quoteText);
let apiQuotes = [];

function newQuote() {
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  quoteText.textContent = quote.text;
  quoteAuthor.textContent = quote.author;
}

function complete() {
  load.hidden = true;
  quoteContainer.hidden = false;
}

async function getQuotes() {
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {}
}
function Tweet() {
  const tUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${quoteAuthor.textContent}`;
  window.open(tUrl, "_blank");
}
btnTwitter.addEventListener("click", Tweet);
btnNew.addEventListener("click", newQuote);

getQuotes();
