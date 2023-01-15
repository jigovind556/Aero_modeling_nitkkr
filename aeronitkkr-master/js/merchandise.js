const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById('close');

const Server = "http://127.0.0.1:3001";
const data=JSON.parse(localStorage.getItem("user"));
if(data){
    document.getElementById("nav_buttons").innerHTML+=`<a href="account.html"><i class="fa-regular fa-circle-user icons"></i></a>`;
}
else{
    document.getElementById("nav_buttons").innerHTML+=`<a href="signup.html"><i class="fa-regular fa-circle-user icons"></i></a>`;
}


if(bar){
    bar.addEventListener('click', ()=>{
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click', ()=>{
        nav.classList.remove('active');
    })
}

// const cart = document.getElementById("cart");

var total = 0

function cart(){
    total++;
    console.log(total);
    var cart_value = document.getElementById("cart_value").innerHTML = total;
    return cart_value++;
}

