document.getElementById("cashout-btn").addEventListener("click", function () { 
    // console.log("Cashout Btn clicked");
    // 1. Get agent Number
    const agentNumberInput=document.getElementById('input-cashout');
    const agentNumber=agentNumberInput.value;
    console.log(agentNumber);
    // 2.Get the Amount
    const amountNumberInput=document.getElementById('input-amount');
    const amountNumber=amountNumberInput.value;
    console.log(amountNumber);

    // 3.Get the pinnumber 
    const pinnumberInput=document.getElementById("input-pin");
    const pinNumber=pinnumberInput.value;
    console.log(pinNumber);
    // 4.get the balance
    const balanceElement=document.getElementById("balance");
    const balance=balanceElement.innerText;
     console.log(balance);

    //  5.validation balance 

    const newbalance= Number(balance)-Number(amountNumber);
    console.log(newbalance);
    if(newbalance<0){
        alert("Insaficiant Balance");
        return;
    }
    else{
        alert("Cash Out Succesful");
    }
    balanceElement.innerText=newbalance;


})