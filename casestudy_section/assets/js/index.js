

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