function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
  document.getElementById("mySidenav").style.overflow = "hidden";
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
