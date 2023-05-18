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
    logo: "https://firebasestorage.googleapis.com/v0/b/refr/o/website%2FRectangle%2010543.png?alt=media&token=e99323d5-7f09-4e0a-b2c8-c499cbaf6e46",
    banner:
      "https://firebasestorage.googleapis.com/v0/b/refr/o/website%2Fsheefash.png?alt=media&token=25b110f4-bcd8-45b6-9b3e-e31486d5a9bd",
  },
  {
    id: 2,
    desc: "Expanding our business was easy with Refr. Since our customers started recommending us, we gained recognition in our neighbourhood which lead to increased walk-ins.",
    storeName: "Snip & Scissors",
    logo: "https://firebasestorage.googleapis.com/v0/b/refr/o/website%2Fsnip_banner.png?alt=media&token=b87512bf-61cc-4d3f-8b30-76b389d9ec74",
    banner: "https://firebasestorage.googleapis.com/v0/b/refr/o/website%2Fsnip_logo.png?alt=media&token=626a26d2-aeca-4aa6-bbd9-72e2f59daa38",
  },
  {
    id: 3,
    desc: "We are quite happy to list our brand on the Refr marketplace. Customers can easily pay with RefrCash, which let’s more people buy from us. They help with the cataloguing as well, so it’s been a smooth ride.",
    storeName: "Wrapcart",
    logo: "https://firebasestorage.googleapis.com/v0/b/refr/o/website%2FwrapcartLogo.png?alt=media&token=d6875079-0fa5-446d-abd5-68a633d7f55d",
    banner: "https://firebasestorage.googleapis.com/v0/b/refr/o/website%2Fwrapcartbanner.png?alt=media&token=03870319-ee0d-4098-86be-12b78bc9db67",
  },
];

const desc = document.getElementById("desc");
const storename = document.getElementById("storename");
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
  logo.src = item.logo;
  banner.src = item.banner;
});

// show person based on item

function showPerson(person) {
  const item = reviews[person];
  desc.textContent = item.desc;
  storename.textContent = item.storeName;
  logo.src = item.logo;
  banner.src = item.banner;
}

// show next person
  // document.getElementById("desc").classList.toggle("textColorChange");


nextBtn.addEventListener("click", function (e) {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }

  showPerson(currentItem);
});

// show prev person

prevBtn.addEventListener("click", function () {
  currentItem--;

  if (currentItem < 0) {
    currentItem = reviews.length - 1;
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

