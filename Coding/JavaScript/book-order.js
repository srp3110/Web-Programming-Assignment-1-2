function calculate(unt_prc, qty, ttl){
    let x = document.getElementById(unt_prc).value;
    x = parseFloat(x).toFixed(2);
    document.getElementById(unt_prc).value = x;
    let y = document.getElementById(qty).value;
    y = parseFloat(y).toFixed(0);
    document.getElementById(qty).value = y;
    let xy = x*y;
    xy = parseFloat(xy).toFixed(2);
    document.getElementById(ttl).value = xy;
}
function first_row(){
    let row = 1;
    let unt_prc = "unit_price_1";
    let qty = "quantity_1";
    let ttl = "total_1";
    calculate(unt_prc, qty, ttl);
}
function second_row(){
    let row = 2;
    let unt_prc = "unit_price_2";
    let qty = "quantity_2";
    let ttl = "total_2";
    calculate(unt_prc, qty, ttl);
}
function third_row(){
    let row = 3;
    let unt_prc = "unit_price_3";
    let qty = "quantity_3";
    let ttl = "total_3";
    calculate(unt_prc, qty, ttl);
}
function fourth_row(){
    let row = 4;
    let unt_prc = "unit_price_4";
    let qty = "quantity_4";
    let ttl = "total_4";
    calculate(unt_prc, qty, ttl);
}
function fifth_row(){
    let row = 5;
    let unt_prc = "unit_price_5";
    let qty = "quantity_5";
    let ttl = "total_5";
    calculate(unt_prc, qty, ttl);
}

function grandTotal(){
    let ttl_1 = document.getElementById("total_1").value;
    ttl_1 = parseFloat(ttl_1);
    let ttl_2 = document.getElementById("total_2").value;
    ttl_2 = parseFloat(ttl_2);
    let ttl_3 = document.getElementById("total_3").value;
    ttl_3 = parseFloat(ttl_3);
    let ttl_4 = document.getElementById("total_4").value;
    ttl_4 = parseFloat(ttl_4);
    let ttl_5 = document.getElementById("total_5").value;
    ttl_5 = parseFloat(ttl_5);
    let g_ttl = ttl_1 + ttl_2 + ttl_3 + ttl_4 + ttl_5;
    g_ttl = parseFloat(g_ttl).toFixed(2);
document.getElementById("sumGrandTotal");
}

function calculateTotal(){
    first_row()
    second_row()
    third_row()
    fourth_row()
    fifth_row()
    grandTotal()
}

document.getElementById("calculateGrandTotal").onclick = calculateTotal();