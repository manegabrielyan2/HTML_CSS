function check_not_empty(){
    var input_email = document.getElementById("email_input");
    if (input_email.value == ""){
        alert("Email input is empty. Enter your email please")
        return false;
    }
    return true;
}
