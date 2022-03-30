const circles = document.querySelectorAll(".circle");
console.log(circles);

let active = 0;
setInterval("change();", 3000);

function change()
{
    circles[active].className = 'circle';
    active++;
    if (active > 2)
    {
        active = 0;
    }
    const currentl = circles[active];
    currentl.classList.add(currentl.getAttribute("color"))
}