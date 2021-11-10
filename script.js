// document.getElementById("phone-increase").addEventListener('click', function(){
//     // const phoneInput = document.getElementById("phone-count");
//     // const phoneCount = parseInt(phoneInput.value);
//     // const phoneNewCount = phoneCount + 1;
//     // phoneInput.value = phoneNewCount;
//     // const phoneTotal = phoneNewCount * 1219;
//     // document.getElementById("phone-total").innerText = '$' + phoneTotal;
//     handleProductChange(true);
// });

// document.getElementById("phone-decrease").addEventListener('click', function(){
//     // const phoneInput = document.getElementById("phone-count");
//     // const phoneCount = parseInt(phoneInput.value);
//     // const phoneNewCount = phoneCount - 1;
//     // phoneInput.value = phoneNewCount;
//     // const phoneTotal = phoneNewCount * 1219;
//     // document.getElementById("phone-total").innerText = '$' + phoneTotal;
//     handleProductChange(false);
// })

function handleProductChange(product,isIncrease){
    const productInput = document.getElementById(product + "-count");
    const productCount = parseInt(productInput.value);

    let productNewCount = productCount;
    if(isIncrease == true){
        productNewCount = productCount + 1;
    }
    if(isIncrease == false && productCount > 0){
        productNewCount = productCount - 1;
    }
    productInput.value = productNewCount;

    // const productTotal = productNewCount * 1219;
    let productTotal = 0;
    if(product == 'phone'){
        productTotal = productNewCount * 1219;
    }
    if(product == 'case'){
        productTotal = productNewCount * 59;
    }
    document.getElementById(product + '-total').innerText = '$' + productTotal;
}