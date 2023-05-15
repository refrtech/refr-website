
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


$(document).ready(function ()
{
    $('.card').hide();
    $('.card').each(function (index, value)
    {
        if (index < 6)
        {
            $(this).show();
        }
    });
    if ($('.card:hidden').length)
    {
        $('#more').show();
    }
    if (!$('.card:hidden').length)
    {
        $('#more').hide();
    }

});


$('#more').on('click', function ()
{
    $('.card:hidden').each(function (index, value)
    {
        if (index < 6)
        {
            $(this).show();
        }
    });
    if (!$('.card:hidden').length)
    {
        $('#more').hide();
    }
});



//animation

// horizotal anime s
const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue(
    "--marquee-elements-displayed"
);
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for (let i = 0; i < marqueeElementsDisplayed; i++)
{
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}
// horizotal anime e