function generateHexCode () {
    return Math.floor(Math.random()*10);
}
function generateAtoZalpha() {
    var letters = "ABCDEFabcdef";
    var text = "";
    for(var i = 0; i < 1; i++) {
        text += letters.charAt(Math.floor(Math.random()* letters.length))
    }
   return text;
}

var button = document.getElementById("btn");
button.addEventListener("click" , () => {
    const hexCode = "#" + generateHexCode() + generateAtoZalpha() + generateHexCode() + generateAtoZalpha() + generateHexCode() + generateAtoZalpha();
   document.body.style.backgroundColor = hexCode;
   document.getElementById("hexcoded").innerHTML += hexCode + "<br>"
});;


