document.getElementById("add-money-btn").addEventListener("click", function () {
//  console.log("BUtton clicked");
// step-1:Get the bank name 
    const bankName=getValueById("bank-name");
    // console.log(bankName);
    if(bankName=="Select bank"){
        alert("Please Select A Bank");
        return;
    }
    const bankAccountNumber=getValueById("input-bank-acount-number");
    // console.log(bankAccountNumber);
    if(bankAccountNumber.length !=11){
        alert("Account does not exsist");
        return;
    }

    const addBalance=getValueById("input-bank-amount");
    // console.log(addBalance);



    const currentBalance = balance();
    // console.log(currentBalance);
    const newBalance = currentBalance + Number(addBalance);
    // console.log(newBalance);
    const pin =getValueById("input-pin");
    if(pin=='2313'){
        alert("Add Money Succesfull");
        SetBalance(newBalance);
    }
    else{
        alert("Invalid Pin Number ");
        return;
    }
})