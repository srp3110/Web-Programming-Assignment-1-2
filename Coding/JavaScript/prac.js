function calculateTotal(){
    let counter = 1, price = 0, quantity = 0, total = 0, calcGrandTotal = 0;
    while (counter <= 5) {
        price = parseFloat(document.getElementById(`price_${counter}`).value);
        price = price.toFixed(2)
        quantity = parseFloat(document.getElementById(`quantity_${counter}`).value);
        quantity = quantity.toFixed(0)
        total = price * quantity;
        document.getElementById(`total_${counter}`).value = total.toFixed(2);
        calcGrandTotal += total;
        document.getElementById("sumGrandTotal").value = calcGrandTotal;
        counter++;
    }
}