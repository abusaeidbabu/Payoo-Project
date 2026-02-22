document.getElementById("cashout-btn").addEventListener("click", function () { 
    // console.log("Cashout Btn clicked");
    // 1. Get agent Number
    const agentNumber=getValueById('input-cashout');
    // const agentNumberInput=document.getElementById('input-cashout');
    // const agentNumber=agentNumberInput.value;
    // console.log(agentNumber);
    if(agentNumber.length !=11){
        alert("Invalid Agent Number");
        return;
    }
    // 2.Get the Amount
    const amountNumber = getValueById("input-amount");
    // const amountNumberInput=document.getElementById('input-amount');
    // const amountNumber=amountNumberInput.value;
    // console.log(amountNumber);

    // 3.Get the pinnumber 
    const pinNumber = getValueById("input-pin");
    // const pinnumberInput=document.getElementById("input-pin");
    // const pinNumber=pinnumberInput.value;
    // console.log(pinNumber);
    // 4.get the balance
    const balanceElement=document.getElementById("balance");
    const balance=balanceElement.innerText;
     console.log(balance);

    //  5.validation balance 

    const newbalance= Number(balance)-Number(amountNumber);
    // console.log(newbalance);
    if(pinNumber=="2313"){
         balanceElement.innerText=newbalance;
        if(newbalance<0){
        alert("Insaficiant Balance");
        return;
    }
    else{
        alert("Cash Out Succesful");
    }
    }
   else{
    alert("Invalid Pin Number")
   }

})