document.getElementById('btn-deposit').addEventListener('click',function(){

    const depositFild = document.getElementById('deposit');
    const newDepositAmount = parseFloat(depositFild.value) ;

    depositFild.value = '';

    if (isNaN(newDepositAmount)) {
        alert('Please Provide A Number  -_- ')
        return;
    }
    else{
        const depositTotalEliment = document.getElementById('deposit-total');
    const previousDepositTotal = parseFloat(depositTotalEliment.innerText);

    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalEliment.innerText = currentDepositTotal;    

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(balanceTotalElement.innerText);

    const currentPreviousBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentPreviousBalanceTotal;
    
    }
})
document.getElementById('btn-withdraw').addEventListener('click',function(){

    const withdrawFild = document.getElementById('withdraw');
    const newWithdrawAmount = parseFloat(withdrawFild.value) ;

    withdrawFild.value = '';

    if (isNaN(newWithdrawAmount)) {
        alert('Please Provide A Number  -_- ')
        return;

    }
    else{
        const withdrawTotalEliment = document.getElementById('withdraw-total');
        const previousWithdrawTotal = parseFloat(withdrawTotalEliment.innerText);

        const balanceTotalElement = document.getElementById('balance-total');
        const previousBalanceTotal = parseFloat(balanceTotalElement.innerText);
        
        if (previousBalanceTotal < newWithdrawAmount ) {
            alert('Grob ar bank a ato taka nai');
            return;
            
        }
        const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
        withdrawTotalEliment.innerText = currentWithdrawTotal;    

        const currentPreviousBalanceTotal = previousBalanceTotal - newWithdrawAmount;
        balanceTotalElement.innerText = currentPreviousBalanceTotal;
    }

})
