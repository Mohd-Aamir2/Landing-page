// MOBILE MENU
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
});

// ACCORDION
document.querySelectorAll(".title").forEach(item => {
  item.addEventListener("click", () => {
    const content = item.nextElementSibling;
    content.style.display =
      content.style.display === "block" ? "none" : "block";
  });
});

// SCROLL ANIMATION
const elements = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
  elements.forEach(el => {
    const pos = el.getBoundingClientRect().top;
    if (pos < window.innerHeight - 50) {
      el.classList.add("show");
    }
  });
});

document.querySelectorAll(".title").forEach(title => {
  title.addEventListener("click", () => {
    const item = title.parentElement;

    // close others (optional)
    document.querySelectorAll(".item").forEach(i => {
      if (i !== item) i.classList.remove("active");
    });

    item.classList.toggle("active");
  });
});