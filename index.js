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

function back_btn() {
  location.href = "https://nouhidev.github.io/projects";
}

function remnants_btn() {
  location.href = "https://nouhidev.github.io/remnants/";
}

function sb_btn() {
  location.href = "https://nouhidev.itch.io/shreks-basement";
}

function achromatopsia_btn() {
  location.href = "https://nouhidev.itch.io/achromatopsia";
}

function ets_btn() {
  location.href = "https://nouhidev.itch.io/escape-the-shrek";
}
