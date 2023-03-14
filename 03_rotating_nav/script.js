const $ = (query) => document.querySelector(query);

$(".circle").addEventListener("click", () => {
  $(".container").classList.toggle("rotate");
});
