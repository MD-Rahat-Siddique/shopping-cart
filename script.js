document.getElementById("phone-increase").addEventListener('click', function(){
    const phoneInput = document.getElementById("phone-count");
    const phoneCount = parseInt(phoneInput.value);
    const phoneNewCount = phoneCount + 1;
    phoneInput.value = phoneNewCount;
    const phoneTotal = phoneNewCount * 1219;
    document.getElementById("phone-total").innerText = "$" + phoneTotal;
});

document.getElementById("phone-decrease").addEventListener('click', function(){
    const phoneInput = document.getElementById("phone-count");
    const phoneCount = parseInt(phoneInput.value);
    const phoneNewCount = phoneCount - 1;
    phoneInput.value = phoneNewCount;
    const phoneTotal = phoneNewCount * 1219;
    document.getElementById('phone-total').innerText = '$' + phoneTotal;
})