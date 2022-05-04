

function getRandomColor() 
{
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function diagramm()
{
    var canvas = document.getElementById("canvas");
    var g = canvas.getContext("2d");

    var count = document.getElementById("count");
    var n = count.value;
    var a = Math.floor(500/n);
    g.clearRect(0, 0, canvas.width, canvas.height)
    for(var i = 0; i < n; i++)
    {
        var x = a*i;
        var w = - Math.random()*500;
        g.fillRect(x, 300, a, w);
        g.fillStyle = getRandomColor();
        
    }
}
