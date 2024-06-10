function click_toggle(){
    var opt = document.getElementById("option-logo");
    var menu = document.getElementById("link-toggle");
    var bar = document.getElementById("bars");
    var close = document.getElementById("close");

    menu.classList.toggle("link-toggle")

    if (menu.classList.contains("link-toggle")){
        close.style.display="block"
        bar.style.display="none"
    }
    else{
        close.style.display="none" 
        bar.style.display="block"
    }
}


