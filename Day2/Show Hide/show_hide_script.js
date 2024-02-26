function show_hide(){
    var m = document.getElementById("hide");
    var n = document.getElementById("par");
    if( m.textContent === "Hide"){
        m.textContent = "Show";
        n.style.visibility = "hidden";
    }
    else{
        m.textContent = "Hide";
        n.style.visibility = "visible";
    }
    

} 
