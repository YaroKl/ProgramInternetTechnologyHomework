const circles = document.querySelectorAll(".circle");
console.log(circles);

let active = 0;
setInterval("change();", 1000);

function change()
{
    circles[active].className = 'circle';
    active++;
    if (active > 3)
    {
        active = 0;
    }
    const currentl = circles[active];
    currentl.classList.add(currentl.getAttribute("color"))
}