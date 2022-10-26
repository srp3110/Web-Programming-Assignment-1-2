function calculateTotal(){
    let counter_1 = 1, counter_2 = 1, price = 0, quantity = 0, total = 0, calcGrandTotal = 0, negativeValue = false;
    while (counter_1 <= 5) {
        if (document.getElementById(`price_${counter_1}`).value < 0) {
            negativeValue = true;
            let x = prompt("ERROR: Unit Price value cannot be negative. Enter a valid value for UNIT PRICE!")
            document.getElementById(`price_${counter_1}`).value = x;
        } if (document.getElementById(`quantity_${counter_1}`).value < 0) {
            negativeValue = true;
            let y = prompt("ERROR: Quantity value cannot be negative. Enter a valid value for QUANTITY!")
            document.getElementById(`quantity_${counter_1}`).value = y;
        }
        counter_1++
    }
    while (counter_2 <= 5) {
        price = parseFloat(document.getElementById(`price_${counter_2}`).value);
        price = price.toFixed(2);
        quantity = parseFloat(document.getElementById(`quantity_${counter_2}`).value);
        quantity = Math.round(quantity);
        total = price * quantity;
        document.getElementById(`total_${counter_2}`).value = total.toFixed(2);
        calcGrandTotal += total;
        document.getElementById("sumGrandTotal").value = calcGrandTotal.toFixed(2);
        counter_2++
    }
}