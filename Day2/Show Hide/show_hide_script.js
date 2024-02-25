function show_hide(){
    var n = document.getElementById("par");
    if( n.style.visibility == "visible"){
        n.style.visibility = "hidden";
    }
    else{
        n.style.visibility = "visible";
    }
    var m = document.getElementById("hide");
    if( m.textContent === "Hide"){
        m.textContent = "Show";
    }
    else{
        m.textContent = "Hide";
    }

} 
