const $ = (query) => document.querySelector(query);
const items = document.querySelectorAll(".item");

let active = 0;
const percent = {
  0: "0%",
  1: "33%",
  2: "66%",
  3: "100%",
};

const btnColor = () => {
  if (active === 0) $(".prev").disabled = true;
  else $(".prev").disabled = false;
  if (active === 3) $(".next").disabled = true;
  else $(".next").disabled = false;
};

$(".prev").addEventListener("click", () => {
  if (active > 0) {
    items[active].classList.remove("active");
    active--;
  }
  $(".blue-line").style.width = percent[active];
  btnColor();
});

$(".next").addEventListener("click", () => {
  if (active < 3) {
    active++;
    items[active].classList.add("active");
  }
  $(".blue-line").style.width = percent[active];
  btnColor();
});
