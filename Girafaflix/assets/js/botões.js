const girafaFlix = document.getElementById('girafaFlix');
const homeButton = document.querySelector('.nav-itens li:first-child a');
const newButton = document.querySelector('.nav-itens li:nth-child(2) a');
const exploreButton = document.querySelector('.nav-itens li:nth-child(3) a');
const showsButton = document.querySelector('.nav-itens li:nth-child(4) a');

girafaFlix.addEventListener('click', function() {
  window.location.href = "index.html";
});

homeButton.addEventListener('click', function(event) {
  event.preventDefault();
  window.location.href = "index.html";
});

newButton.addEventListener('click', function(event) {
  event.preventDefault();
  window.location.href = "movie-list.html";
});

exploreButton.addEventListener('click', function(event) {
  event.preventDefault();
  window.location.href = "detail.html";
});

showsButton.addEventListener('click', function(event) {
  event.preventDefault();
  window.location.href = "";
});

