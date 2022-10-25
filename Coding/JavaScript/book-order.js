function calculateTotal(){
    let counter_1 = 1, counter_2 = 1, price = 0, quantity = 0, total = 0, calcGrandTotal = 0, negativeValue = false;
    while (counter_1 <= 5) {
        if (document.getElementById(`price_${counter_1}`).value < 0) {
            document.getElementById(`price_${counter_1}`).value = 0;
            negativeValue = true;
        } if (document.getElementById(`quantity_${counter_1}`).value < 0) {
            document.getElementById(`quantity_${counter_1}`).value = 0;
            negativeValue = true;
        }
        counter_1++
    }
    if (negativeValue == true) {
        alert("Invalid value detected")
    }
    while (counter_2 <= 5) {
        price = parseFloat(document.getElementById(`price_${counter_2}`).value);
        price = price.toFixed(2)
        quantity = parseFloat(document.getElementById(`quantity_${counter_2}`).value);
        quantity = quantity.toFixed(0)
        total = price * quantity;
        document.getElementById(`total_${counter_2}`).value = total.toFixed(2);
        calcGrandTotal += total;
        document.getElementById("sumGrandTotal").value = calcGrandTotal;
        counter_2++;
    }
}