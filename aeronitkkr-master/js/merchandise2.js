const Server = "http://52.66.22.85:3001";

// const Server = "http://127.0.0.1:3001";
const data = JSON.parse(localStorage.getItem("user"));
if (data) {
  document.getElementById("login").setAttribute("href", "account.html");
} else {
  document.getElementById("login").setAttribute("href", "signup.html");
}

fetchProduct();
function fetchProduct() {
  var Server2 = Server + "/getproduct";
  var result;
  axios
    .post(Server2, "")
    .then((res) => {
      console.log(res.data);
      procontainer( res.data);
      

    })
    .catch((err) => {
      console.log(err);
    //   return "";
    });
    
}
// images/products/
// procontainer();
function procontainer( product) {
  var img = ["f1.jpg", "f4.jpg", "f2.jpg"];
  var container = document.getElementsByClassName("pro-container")[0];
//   var product=fetchProduct();
  console.log(product.length);
  img[0]=product[0].img_url;

  for (let i = 0; i < product.length; i++) {
    container.innerHTML +=
      `
    <div class="pro">
    <img src=` +
    product[i].img_url +
      ` alt="">
        <div class="des">
            <span>Aero merchandise</span>
            <h5>`+product[i].name+`</h5>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <h4>Rs.`+product[i].price+`/-</h4>
        </div>
         <a href="#"><i class="fa-sharp fa-solid fa-basket-shopping"></i></a>
    </div>`;
  }
}

//ayush-js
const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}
