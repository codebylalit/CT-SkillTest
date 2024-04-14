const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

document.getElementById("btn1").addEventListener("click", function () {
  document.getElementById("page1").style.display = "block";
  btn1.classList.add("Selected");
  btn2.classList.remove("Selected");
  document.getElementById("page2").style.display = "none";
});

document.getElementById("btn2").addEventListener("click", function () {
  document.getElementById("page1").style.display = "none";
  btn2.classList.add("Selected");
  btn1.classList.remove("Selected");
  document.getElementById("page2").style.display = "block";
});
