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
function first_row(){
    let row = 2;
    let unt_prc = "unit_price_2";
    let qty = "quantity_2";
    let ttl = "total_2";
    calculate(unt_prc, qty, ttl);
}
function first_row(){
    let row = 3;
    let unt_prc = "unit_price_3";
    let qty = "quantity_3";
    let ttl = "total_3";
    calculate(unt_prc, qty, ttl);
}
function first_row(){
    let row = 4;
    let unt_prc = "unit_price_4";
    let qty = "quantity_4";
    let ttl = "total_4";
    calculate(unt_prc, qty, ttl);
}
function first_row(){
    let row = 5;
    let unt_prc = "unit_price_5";
    let qty = "quantity_5";
    let ttl = "total_5";
    calculate(unt_prc, qty, ttl);
}