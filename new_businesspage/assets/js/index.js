// scrolling s
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // console.log("entry");
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

// scrolling e

// testimontial s

const reviews = [
  {
    id: 1,
    desc: "Refr let’s our customers give us a shout-out from the table which has led to increase in our order volume. We are very pleased with this genuine form of marketing for our restaurant.",
    storeName: "SEEFAH",
    storeDetails: "Seefah Ketchaiyo",
    jd: "Chef",
    logo: "https://firebasestorage.googleapis.com/v0/b/refr/o/website%2FRectangle%2010543.png?alt=media&token=e99323d5-7f09-4e0a-b2c8-c499cbaf6e46",
    banner:
      "https://firebasestorage.googleapis.com/v0/b/refr/o/website%2Fsheefash.png?alt=media&token=25b110f4-bcd8-45b6-9b3e-e31486d5a9bd",
  },
  {
    id: 2,
    desc: "This is the kind of marketing and selling tool we have been looking for , it helps to get you infront of the right audience by digitalising word of mouth",
    storeName: "Rootsdent",
    storeDetails: "Dr Ankita Mathur",
    jd: "Dentist",
    logo: "https://firebasestorage.googleapis.com/v0/b/refr/o/website%2F2.webp?alt=media&token=2c907b7a-5cea-45dd-ae78-ffc8003151c4",
    banner:
      "https://firebasestorage.googleapis.com/v0/b/refr/o/website%2F2.webp?alt=media&token=2c907b7a-5cea-45dd-ae78-ffc8003151c4",
  },
  // {
  //   id: 3,
  //   desc: "With Refr recommendations we increased our brand reach which led to increased footfalls",
  //   storeName: "Estilo Salon",
  //   storeDetails: "Abhishek",
  //   jd: "Owner",
  //   logo: "./assets/img/testimonial/Rectangle 10543.png",
  //   banner:
  //     "https://firebasestorage.googleapis.com/v0/b/refr/o/website%2F2.webp?alt=media&token=2c907b7a-5cea-45dd-ae78-ffc8003151c4",
  // },
];

const desc = document.getElementById("desc");
const storename = document.getElementById("storename");
const storedetails = document.getElementById("storeDetails");
const jd = document.getElementById("jd");
const logo = document.getElementById("logo");
const banner = document.getElementById("banner");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

// set starting item
let currentItem = 0;

// load inital item
window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  desc.textContent = item.desc;
  storename.textContent = item.storeName;
  storedetails.textContent = item.storeDetails;
  jd.textContent = item.jd;
  logo.src = item.logo;
  banner.src = item.banner;
});

// show person based on item

function showPerson(person) {
  const item = reviews[person];
  desc.textContent = item.desc;
  storename.textContent = item.storeName;
  storedetails.textContent = item.storeDetails;
  jd.textContent = item.jd;
  logo.src = item.logo;
  banner.src = item.banner;
}

// show next person

nextBtn.addEventListener("click", function (e) {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  // document.getElementById("desc").classList.toggle("textColorChange");

  showPerson(currentItem);
});

// show prev person

prevBtn.addEventListener("click", function () {
  currentItem--;

  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  } else {
    document.getElementById("desc").classList.toggle("textColorChange");
  }

  showPerson(currentItem);
});

// testimontial e

//

function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// sidenav

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".sidebar .nav-link").forEach(function (element) {
    element.addEventListener("click", function (e) {
      let nextEl = element.nextElementSibling;
      let parentEl = element.parentElement;
      this.classList.toggle("active");

      if (nextEl) {
        e.preventDefault();
        let mycollapse = new bootstrap.Collapse(nextEl);
        if (nextEl.classList.contains("show")) {
          mycollapse.hide();
        } else {
          mycollapse.show();
          // find other submenus with class=show
          var opened_submenu =
            parentEl.parentElement.querySelector(".submenu.show");
          // if it exists, then close all of them
          if (opened_submenu) {
            new bootstrap.Collapse(opened_submenu);
          }
        }
      }
    }); // addEventListener
  }); // forEach
});
// DOMContentLoaded  end
