document.getElementById('btn-withdraw').addEventListener('click', function(){
    const depositField = document.getElementById('textField');
    const depositSting = depositField.value;
    const deposit = parseFloat(depositSting);
    

    const depositValue = document.getElementById('total-deposit');
    const depositTotalString = depositValue.innerText;
    const depositTotal = parseFloat(depositTotalString);

    const currentDeposit = deposit + depositTotal;

    depositValue.innerText = currentDeposit;



    const totalBal = document.getElementById('balanceID');
    const totalBalString = totalBal.innerText;
    const totalBalance = parseFloat(totalBalString);

    const currentBalance = totalBalance + deposit; 
    totalBal.innerText = currentBalance;
    

    depositField.value = " ";

})

document.getElementById('withdrawID').addEventListener('click', function(){
    const withdrawNew = document.getElementById('withdrawField');
    const withdrawstring = withdrawNew.value;
    const withdraw = parseFloat(withdrawstring);


    const withdrawBal = document.getElementById('total-withdraw');
    const totalWithString = withdrawBal.innerText;
    const newWithBalance = parseFloat(totalWithString);

    const currentWith = newWithBalance + withdraw; 
    withdrawBal.innerText = currentWith;




    const finalBal = document.getElementById('balanceID');
    const finalBalString = finalBal.innerText;
    const finalBalance = parseFloat(finalBalString);

    const presentBalance = finalBalance - withdraw;
    finalBal.innerText = presentBalance;


    withdrawNew.value = " ";
})