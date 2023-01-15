const Server = "http://52.66.22.85:3001";
// const Server = "http://127.0.0.1:3001";




function send_data() {
 
  let data={
      Address_L1 : document.getElementById("input_6_addr_line1").value,
      Address_L2 : document.getElementById("input_6_addr_line2").value,
      Area_code: document.getElementById("input_5_area").value,
      City: document.getElementById("input_6_city").value,
      Email: JSON.parse(localStorage.getItem("user")).Email,
      FName: document.getElementById("first_3").value,
      LName: document.getElementById("last_3").value,
      PIN_code: document.getElementById("input_6_postal").value,
    //   Paid_status: "n",
      Phone_No: document.getElementById("input_5_phone").value,
    //   Quantity_ordered: document.getElementById("input_7_quantity_1000_0").value,
      State: document.getElementById("input_6_state").value        
    //   T_shirt_size: document.getElementById("input_7_custom_1000_1").value,
    //   delivery_status: "N"
  };
  console.log(data);

  var Server2=Server+"/putCheckInfo";

  console.log("hello");
  axios
      .post(Server2, data)
      .then((res) => {
          console.log(res.data);
            window.location.href="account.html";

      })
      .catch((err) => {
          console.log(err);
      });
}

document.querySelector('#payment_total').innerHTML = payment_total();
