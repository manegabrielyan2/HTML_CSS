function toggle() {
    var button = document.getElementById("toggle_button");
    if (button.textContent === "Hello") {
        button.textContent = "Goodbye";
    } else {
        button.textContent = "Hello";
    }
}
