function display() {
    var input_element = document.getElementById("text_input");
    var input_value = input_element.value;
    var display_paragraph = document.getElementById("display_p");
    display_paragraph.textContent = "Input: " + input_value;
}

