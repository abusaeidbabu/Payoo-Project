function getValueById (id){
   const input= document.getElementById(id);
    const value = input.value;
    return value;
}
function balance (){
     const balanceElement=document.getElementById("balance");
    const balance=balanceElement.innerText;
    const value =Number(balance);
    return value;
}
function SetBalance (value){
     const balanceElement=document.getElementById("balance");
     balanceElement.innerText=value;
}