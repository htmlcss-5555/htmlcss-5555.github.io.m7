

var icon = document.getElementById("icon");
icon.onclick = function() {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")){
        icon.src = "img/off.png";
    } else {
        icon.src = "img/on.png";
    }
}