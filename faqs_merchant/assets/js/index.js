
function openNav()
{
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav()
{
    document.getElementById("mySidenav").style.width = "0";
}

// sidenav

document.addEventListener("DOMContentLoaded", function ()
{
    document.querySelectorAll(".sidebar .nav-link").forEach(function (element)
    {
        element.addEventListener("click", function (e)
        {
            let nextEl = element.nextElementSibling;
            let parentEl = element.parentElement;
            this.classList.toggle("active");

            if (nextEl)
            {
                e.preventDefault();
                let mycollapse = new bootstrap.Collapse(nextEl);
                if (nextEl.classList.contains("show"))
                {
                    mycollapse.hide();
                } else
                {
                    mycollapse.show();
                    // find other submenus with class=show
                    var opened_submenu =
                        parentEl.parentElement.querySelector(".submenu.show");
                    // if it exists, then close all of them
                    if (opened_submenu)
                    {
                        new bootstrap.Collapse(opened_submenu);
                    }
                }
            }
        }); // addEventListener
    }); // forEach
});
// DOMContentLoaded  end


var acc = document.getElementsByClassName("faqs_ques");
var i;

for (i = 0; i < acc.length; i++)
{
    acc[i].addEventListener("click", function ()
    {
        this.classList.toggle("active");
        console.log;
        var panel = this.nextElementSibling;
        if (panel.style.display === "block")
        {
            panel.style.display = "none";
        } else
        {
            panel.style.display = "block";
        }
    });
}