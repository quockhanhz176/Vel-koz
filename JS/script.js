function clack(id){ //I named it clack because click can't be used for some reason
    document.getElementById("main").style.display = "none";
    document.getElementById("intro").style.display = "none";
    document.getElementById("story").style.display = "none";
    document.getElementById("skins").style.display = "none";
    document.getElementById(id).style.display = "block";

    document.getElementById("main_link").className = "";
    document.getElementById("intro_link").className = "";
    document.getElementById("story_link").className = "";
    document.getElementById("skins_link").className = "";
    document.getElementById(id+"_link").className = "active";
    
    document.getElementById
}
function toggletoggle(){
    if(window.matchMedia("(min-width: 768px)").matches){
        var array = document.getElementById("myNavbar").getElementsByTagName("a");
        for(var i=0; i<array.length; i++){
            array[i].setAttribute("href","\#");
            array[i].removeAttribute("data-toggle");
        }
    } else {
        var array = document.getElementById("myNavbar").getElementsByTagName("a");
        for(var i=0; i<array.length; i++){
            array[i].setAttribute("href","#myNavbar");
            array[i].setAttribute("data-toggle","collapse");
        }
    }
}
// .setAttribute("data-toggle","")
// document.getElementById("main_link").getElementsByTagName("a")[0].removeAttribute("data-toggle");
// document.getElementById("main").getElementsByTagName("a")[0].setAttribute("data-toggle","collapse");