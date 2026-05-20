// script.js

const openBtn = document.getElementById("openBtn");
const music = document.getElementById("music");

openBtn.addEventListener("click",()=>{

  music.play();

  document.getElementById("opening")
  .style.display="none";

});

/* COUNTDOWN */

const targetDate = new Date("Dec 12, 2026 08:00:00").getTime();

setInterval(()=>{

  const now = new Date().getTime();

  const distance = targetDate - now;

  const days = Math.floor(distance / (1000*60*60*24));

  const hours = Math.floor(
    (distance % (1000*60*60*24))
    / (1000*60*60)
  );

  const minutes = Math.floor(
    (distance % (1000*60*60))
    / (1000*60)
  );

  const seconds = Math.floor(
    (distance % (1000*60))
    / 1000
  );

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

},1000);

/* =========================
   SCROLL REVEAL
========================= */

const reveals = document.querySelectorAll(".reveal");

function revealSections(){

  const windowHeight = window.innerHeight;

  reveals.forEach(section=>{

    const top = section.getBoundingClientRect().top;

    if(top < windowHeight - 100){

      section.classList.add("active");

    }else{

      section.classList.remove("active");

    }

  });

}

window.addEventListener(
  "scroll",
  revealSections
);

revealSections();