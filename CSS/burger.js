function burger1(){
    var element = document.getElementById("burger");
    if(element.style.display === "flex") {
       element.style.display = "none";
    } else {
        element.style.display = "flex";
    }
}