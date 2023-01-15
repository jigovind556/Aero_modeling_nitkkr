// Defining the URL to hit to initiate the payment
const url = "https://upi.infomattic.com/init_payment.php";
// const url="try.html";

// Generating the order id
// const order_id = "UPI".date('Ymd').rand(999,9999999);
const order_id=Date.now()+Math.floor(Math.random() * 10000);
const purpose="hoodie";
const Amount="1";
const Email="jigovind556@gmail.com"

// Defining the merchant id
const pid = "0943158438816";

setvalues();
function setvalues(){
    console.log(order_id);
    document.getElementById("order_id").innerHTML=order_id;
    document.getElementById("purpose").innerHTML=purpose;
    document.getElementById("Amount").innerHTML=Amount;
    document.getElementById("Email").innerHTML=Email;

    document.getElementsByTagName("input")[0].value=order_id;
    document.getElementsByTagName("input")[1].value=pid;
    document.getElementsByTagName("input")[2].value=purpose;
    document.getElementsByTagName("input")[3].value= Amount;
    document.getElementsByTagName("input")[4].value=Email;
    document.getElementById("form").setAttribute("action",url);
    // document.getElementsByTagName("amount").setAttribute("value",localStorage.getItem("amount"));
}

function url_redirect(){
    window.location.href("url");
    
}


const secret_key = "3fc10601a7fea342ddfb06d6503d5e0e";


