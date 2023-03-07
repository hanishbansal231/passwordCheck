const submitButton = document.getElementById('submitButton'); // Button
// Add Click Event
submitButton.addEventListener('click', () => {

    const printMessage = document.getElementById('printMessage'); // meassage

    const password = document.getElementById('password').value; // password input
    const comfirmPassword = document.getElementById('comfirmPassword').value; // confirm password
    // check password
    if (comfirmPassword != password) {  
        printMessage.style.color = "red";
        printMessage.innerText = "Password didn't match.";
    } else {
        printMessage.style.color = "green";
        printMessage.innerText = "Password Matched.";
    }
});
