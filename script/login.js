document.getElementById('btn').addEventListener('click' , function(){
   
   
    const emailField = document.getElementById('email');
    const email = emailField.value;

    const passwordFiled = document.getElementById('pass');
    const password = passwordFiled.value;

    console.log(email , password);
})