document.getElementById("phone-increase").addEventListener('click', function(){
    // const phoneInput = document.getElementById("phone-count");
    // const phoneCount = parseInt(phoneInput.value);
    // const phoneNewCount = phoneCount + 1;
    // phoneInput.value = phoneNewCount;
    // const phoneTotal = phoneNewCount * 1219;
    // document.getElementById("phone-total").innerText = '$' + phoneTotal;
    handleProductChange(true);
});

document.getElementById("phone-decrease").addEventListener('click', function(){
    // const phoneInput = document.getElementById("phone-count");
    // const phoneCount = parseInt(phoneInput.value);
    // const phoneNewCount = phoneCount - 1;
    // phoneInput.value = phoneNewCount;
    // const phoneTotal = phoneNewCount * 1219;
    // document.getElementById("phone-total").innerText = '$' + phoneTotal;
    handleProductChange(false);
})

function handleProductChange(isIncrease){
    const phoneInput = document.getElementById("phone-count");
    const phoneCount = parseInt(phoneInput.value);
    // const phoneNewCount = phoneCount - 1;
    let phoneNewCount = phoneCount;
    if(isIncrease == true){
        phoneNewCount = phoneCount + 1;
    }
    if(isIncrease == false && phoneCount > 0){
        phoneNewCount = phoneCount - 1;
    }
    phoneInput.value = phoneNewCount;
    const phoneTotal = phoneNewCount * 1219;
    document.getElementById("phone-total").innerText = '$' + phoneTotal;
}