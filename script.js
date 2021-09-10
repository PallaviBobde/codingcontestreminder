let firstico = document.querySelector(".firstico");
let secondico = document.querySelector(".secondico");
let first = document.querySelector(".first");
let second = document.querySelector(".second");

firstico.addEventListener("click",()=>{
    firstico.classList.add("active");
    secondico.classList.remove("active");
    first.style.display = "block";
    second.style.display = "none";
});
secondico.addEventListener("click",()=>{
    firstico.classList.remove("active");
    secondico.classList.add("active");
    first.style.display = "none";
    second.style.display = "block";
});




var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days1").innerHTML = days + "<span class='gray'>d </span>" + hours + "<span class='gray'>h </span>"
  + minutes + "<span class='gray'>m </span>" + seconds + "<span class='gray'>s </span>";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);