const range = document.getElementById("range"),
  tooltip = document.getElementById("tooltip"),
  setValue = () => {
    const newValue = Number(
        ((range.value - range.min) * 100) / (range.max - range.min)
      ),
      newPosition = 16 - newValue * 0.32;
    tooltip.innerHTML = `<span>${range.value}</span>`;
    console.log("range", range.value);
    tooltip.style.left = `calc(${newValue}% + (${newPosition}px))`;
    document.documentElement.style.setProperty(
      "--range-progress",
      `calc(${newValue}% + (${newPosition}px))`
    );
  };

document.addEventListener("DOMContentLoaded", setValue);
range.addEventListener("input", setValue);

const accordion = document.getElementsByClassName("container");

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}

function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// rr

function calc() {
  var x = document.getElementById("amnt").value;
  if (range.value != 0) {
    let totalreach = x / range.value;
    totalreachs.innerHTML = Math.round(totalreach);

    let totalCov = (totalreach / 100) * 10;
    totalcon.innerHTML = Math.round(totalCov);
  } else {
    totalreachs.innerHTML = 0;
  }
}
