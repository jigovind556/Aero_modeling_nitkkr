function submit(){
    
}
payment_total();
function payment_total(){
    let input = document.getElementById('input_7_quantity_1000_0').value;
    let total = input*20;
    var paymenttotal = document.getElementById('payment_total');
    paymenttotal.innerHTML = total;
  }