document.getElementById("login-btn")
    .addEventListener("click", function () {
    // 1. Get number input
    const inputNumber=document.getElementById("input-number");
    const number = inputNumber.value;
    // console.log(number);
    // 2. Get pin input
     const inputPin=document.getElementById("input-pin");
    const pin = inputPin.value;
    // console.log(pin);

    // 3. true:: alaert-succesful-got to home page
    if(number=="01968195158" && pin=="2313"){
        alert("Login Succesful");
        window.location.assign("./home.html")
    }
    // 4. false:: alart -failed return 
    else{
        alert("Login Faield");
        return;
    }
    })