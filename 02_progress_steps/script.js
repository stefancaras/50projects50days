const $ = (query) => document.querySelector(query);
const items = document.querySelectorAll(".item");

let active = 0;
const percent = {
  0: "0%",
  1: "33%",
  2: "66%",
  3: "100%",
};

const color = () => {
  $(".blue-line").style.width = percent[active];

  if (active === 0) $(".prev").disabled = true;
  else $(".prev").disabled = false;

  if (active === 3) $(".next").disabled = true;
  else $(".next").disabled = false;
};

$(".prev").addEventListener("click", () => {
  items[active].classList.remove("active");
  active--;
  color();
});

$(".next").addEventListener("click", () => {
  active++;
  items[active].classList.add("active");
  color();
});
