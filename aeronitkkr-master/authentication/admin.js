// console.log("hello");
const data = "http://52.66.22.85:3001";
// import data from 'style.js';
const server = data;
const Server = data+"/getInfo";
const Server2 =data+"/putInfo";

// const user_id = JSON.parse(localStorage.getItem("user")).Email;
// if (user_id != null) {
//   let data = {
//     Email: user_id,
//   };

//   server2 = server + "/checkuser";

//   axios
//     .post(server2, data)
//     .then((res) => {
//       var values = res.data;
//       if (values.length > 0) {
//         // user exists
//         console.log(values[0].admin);
//         if (values[0].admin != "y") {
//           //not admin so redirect
//         }
//       }
//     })
//     .catch((err) => {
//       console.log(err);
//       return "4";
//     });
// } else {
//   console.log("not user");
// }

function fetch_data() {
  console.log("hello");
  axios
    .post(Server, "hello")
    .then((res) => {
      console.log(res.data);

      let table_content = document.getElementById("table_body");
      table_content.innerHTML = "";
      for (let l = 0; l < res.data.length; l++) {
        table_content.innerHTML +=
          `
         
        <tr>
            <th scope="row">` +
          (l + 1) +
          `</th>
            <td>` +
          res.data[l].FName +
          `</td>
            <td>` +
          res.data[l].LName +
          `</td>
            <td>` +
          res.data[l].Email +
          `</td>
            <td>` +
          res.data[l].Phone_No +
          `</td>
            <td>` +
          res.data[l].Quantity_ordered +
          `</td>
            <td>` +
          res.data[l].T_shirt_size +
          `</td>
            <td>` +
          res.data[l].Paid_status +
          `</td>
            <td>` +
          res.data[l].delivery_status +
          `</td>
            
        </tr>
        
         `;
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

fetch_data();

function make_form() {
  let table_content = document.getElementById("table_body");
  let l = document.getElementsByTagName("tr").length;
  table_content.innerHTML +=
    `
    <form>
        <tr>
            <th scope="row">` +
    l +
    `</th>
            <td><input type="text" class="form-control" id="FName" placeholder="First name"></td>
            <td><input type="text" class="form-control" id="FName" placeholder="Last name"></td>
            <td><input type="email" class="form-control" id="Email" placeholder="Email"></td>
            <td><input type="number" class="form-control" id="Phone_No" placeholder="Phone_No"></td>
            <td><input type="text" class="form-control" id="Quantity_ordered" placeholder="Quantity_ordered"></td>
            <td><select class="form-control" id="T_shirt_size" placeholder="T_shirt_size">
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="XXL">XXL</option>
            <option value="XXXL">XXXL</option>
            </td>
            <td><select class="form-control" id="Paid_status" placeholder="Paid_status">
                <option value="y">yes</option>
                <option value="n">No</option>
            </td>
            <td><select class="form-control" id="delivery_status" placeholder="delivery_status">
                <option value="y">yes</option>
                <option value="n">No</option>
            </td>
            <td><button onclick="send_data(` +
    l +
    `)"  class="btn btn-primary">submit</button></td>
        </tr>
    </form>
    `;
}

function send_data(l) {
  var values = document.getElementsByTagName("tr")[l];
  let data = {
    Address_L1: "",
    Address_L2: "",
    Area_code: "",
    City: "",
    Email: values.getElementsByTagName("input")[2].value,
    FName: values.getElementsByTagName("input")[0].value,
    LName: values.getElementsByTagName("input")[1].value,
    PIN_code: "",
    Paid_status: values.getElementsByTagName("select")[1].value,
    Phone_No: values.getElementsByTagName("input")[3].value,
    Quantity_ordered: values.getElementsByTagName("input")[4].value,
    State: "",
    T_shirt_size: values.getElementsByTagName("select")[0].value,
    delivery_status: values.getElementsByTagName("select")[2].value,
  };
  console.log(data);

  // console.log("hello");
  axios
    .post(Server2, data)
    .then((res) => {
      console.log(res.data);
      fetch_data();
      work;
    })
    .catch((err) => {
      console.log(err);
    });
}
