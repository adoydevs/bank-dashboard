document.getElementById('btn-submit').addEventListener('click' , function(){
    
    const userName = document.getElementById('user-name');
   const name = userName.value;

    const emailField = document.getElementById('user-email');
   const emailF = emailField.value;
   
   const passField = document.getElementById('user-pass');
   const passwordF = passField.value;

   
//    console.log( emailF , passwordF , name);


    if( emailF === "adoy@gmail.com" && passwordF === "Adoy2050"){
        console.log('Valid User');
    }
    else{
        console.log('Invalid User');
    }
})