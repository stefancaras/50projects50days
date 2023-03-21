const $ = (query) => document.querySelector(query);
let i = 0;

$(".bg").classList.add("active");
const interval = setInterval(() => {
  $(".percent").textContent = i++ + "%";
  if (i === 100) clearInterval(interval);
}, 50);
