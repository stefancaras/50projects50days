const cards = document.querySelectorAll(".card");

document.querySelector(".container").addEventListener("click", (event) => {
  if (event.target.classList.contains("card")) {
    cards.forEach((card) => card.classList.remove("active"));
    event.target.classList.add("active");
  }
});
