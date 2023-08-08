document.getElementById('btn').addEventListener('click' , function(){
   
   
    const emailField = document.getElementById('email');
    const email = emailField.value;

    const passwordFiled = document.getElementById('pass');
    const password = passwordFiled.value;

    if(email === "adoy@gmail.com" && password === "Adoy2050"){
        location.href = '/Dashboard.html';
    }
    else{
        alert('Please submit corect information');
    }
})