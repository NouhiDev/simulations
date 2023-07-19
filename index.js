$(window).on("load", async function () {
  // await delay(2000);
  $(".loader").fadeOut(1000);
  delay(1000).then(() => $(".content").fadeIn(1000));
});

// Hover Effect
document.getElementById("cards").onmousemove = (e) => {
  for (const card of document.getElementsByClassName("card")) {
    const rect = card.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  }
};

function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function ep_btn() {
  location.href = "https://nouhidev.github.io/epidemic-simulation/";
}

function ts_btn() {
  location.href = "https://nouhidev.github.io/traffic-simulation";
}

function as_btn() {
  location.href = "https://nouhidev.github.io/archimedes-screw-simulation";
}

function es_btn() {
  location.href = "https://nouhidev.github.io/ecosystem-simulation/";
}

/* Setup global Navbar */ 
const NAV_URL = "https://nouhi.dev/assets/html-templates/navbar.txt";

fetch(NAV_URL)
  .then( r => r.text() )
  .then( t => {
    var whereToInject = document.getElementsByTagName("header")[0];
    whereToInject.innerHTML += t;
});