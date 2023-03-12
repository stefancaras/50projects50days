const $ = (query) => document.querySelector(query);
const items = document.querySelectorAll(".item");

let active = 0;
const percent = ["0%"];
const lineSplit = 100 / (items.length - 1);

for (let i = 1; i < items.length; i++) {
  percent[i] = lineSplit * i + "%";
}

const color = () => {
  $(".blue-line").style.width = percent[active];

  if (active === 0) $(".prev").disabled = true;
  else $(".prev").disabled = false;

  if (active === items.length - 1) $(".next").disabled = true;
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
