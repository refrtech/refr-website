function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
  console.log("clicked");
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

const accordion = document.getElementsByClassName("container");

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}

//animation

// horizotal anime s
const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue(
  "--marquee-elements-displayed"
);
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for (let i = 0; i < marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}
// horizotal anime e

// vertical animation s

[...document.querySelectorAll(".single-column")].map((column) => {
  column.style.setProperty("--animation", "slide");
  column.style.setProperty("height", "200%");
  column.innerHTML = column.innerHTML + column.innerHTML;
});
// vertical animation e
