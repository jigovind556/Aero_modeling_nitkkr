const data=JSON.parse(localStorage.getItem("user"));
const Server = "http://52.66.22.85:3001";
// const Server = "http://127.0.0.1:3001";
setvalue();
function setvalue(){
    Server2 = Server + "/checkuser";
    var values;
    axios
      .post(Server2, data)
      .then((res) => {
        var values=res.data[0];
        
        console.log(values);
        document.getElementById("user_name").innerHTML=values.FName +" "+values.LName;  
        document.getElementById("name").innerHTML+=values.FName +" "+values.LName;  
        document.getElementById("email").innerHTML+=values.Email;
        document.getElementById("address").innerHTML+=values.Address_L1 +" - "+values.PIN_code;
        document.getElementById("city").innerHTML+=values.City;
        document.getElementById("state").innerHTML+=values.State;

        document.getElementById("mob").innerHTML+=values.Phone_No;  

        if(values.admin=="y"){
            document.getElementById("buttons1").innerHTML+=`<a href="admin.html"  class="w3-button w3-theme-d3 ">admin</a>`
        }
        
      })
      .catch((err) => {
        console.log(err);
        return "4";
      });

}

function logout(){
    window.localStorage.removeItem('user');
    window.location.href="merchandise.html";
}