const $ = (query) => document.querySelector(query);

$(".btn").addEventListener("click", () => {
  $(".input").classList.contains("active") ? ($(".btn").type = "submit") : 0;
  $(".input").classList.add("active");
  $(".input").focus();
});
