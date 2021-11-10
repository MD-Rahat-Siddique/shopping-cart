function handleProductChange(product,isIncrease){
    const productInput = document.getElementById(product + "-count");
    const productCount = parseInt(productInput.value);

    // Check How much or is it minus value :
    let productNewCount = productCount;
    if(isIncrease == true){
        productNewCount = productCount + 1;
    }
    if(isIncrease == false && productCount > 0){
        productNewCount = productCount - 1;
    }
    productInput.value = productNewCount;

    // Create Differenciate on phone and case price :
    let productTotal = 0;
    if(product == 'phone'){
        productTotal = productNewCount * 1219;
    }
    if(product == 'case'){
        productTotal = productNewCount * 59;
    }
    document.getElementById(product + '-total').innerText = '$' + productTotal;
    calculateTotal();
}

// Get subtotal and tax :
function calculateTotal(){
    const phoneCount = getInputValue('phone');
    const caseCount = getInputValue('case');

    const totalCount = phoneCount * 1219 + caseCount * 59;
    document.getElementById("sub-total").innerText = '$' + totalCount;

    const tax = Math.round(totalCount * 0.1);
    document.getElementById("tax-amount").innerText = '$' + tax;

    const totalPrice = totalCount + tax;
    document.getElementById("total-price").innerText = '$' + totalPrice;
}

function getInputValue(product){
    const productInput = document.getElementById(product + "-count");
    const productCount = parseInt(productInput.value);
    return productCount;
}