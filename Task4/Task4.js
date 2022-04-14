var colorArray = ["#5A9C6E", "#A8BF5A", "#FAC46E", "#FAD5BB", "#F2FEFF"];
DarkTheme = "#1E1E1E"
BrightTheme = "#FFF0F0"
DarkThemeFont = "#FFFFFF"
BrightThemeFont = "#000000"
var i = 0;

function changeColor(){
    document.body.style.background = colorArray[i];
    i++;
    if(i > colorArray.length - 1){
        i = 0;
    }
}

function changeDarkTheme(){
    document.body.style.background = DarkTheme;
    document.body.style.color = DarkThemeFont;
}

function changeBrightTheme(){
    document.body.style.background = BrightTheme;
    document.body.style.color = BrightThemeFont;
}