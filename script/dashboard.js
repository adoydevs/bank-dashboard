document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('textField');
    const depositSting = withdrawField.value;
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
    

    withdrawField.value = " ";

})

document.getElementById('withdrawID').addEventListener('click', function(){
    
})