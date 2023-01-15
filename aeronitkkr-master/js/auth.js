const Server = "http://52.66.22.85:3001";

/* YOU DONT NEED THESE, these are just for the popup you see */
//   function onSignIn(googleUser) {
//     var profile = googleUser.getBasicProfile();
//     console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
//     console.log('Name: ' + profile.getName());
//     console.log('Image URL: ' + profile.getImageUrl());
//     console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
//   }

//   function signOut() {
//     var auth2 = gapi.auth2.getAuthInstance();
//     auth2.signOut().then(function () {
//       console.log('User signed out.');
//     });
//   }

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  $("#name").text(profile.getName());
  $("#email").text(profile.getEmail());
  $("#image").attr("src", profile.getImageUrl());
  $(".data").css("display", "block");
  $(".g-signin2").css("display", "none");
}

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    alert("You have been signed out successfully");
    $(".data").css("display", "none");
    $(".g-signin2").css("display", "block");
  });
}

function ValidateEmail(inputText) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//   console.log(inputText);
  //   if (inputText.match(mailformat)) {
  if (mailformat.test(inputText)) {
    document.getElementById("email_input").focus();
    return true;
  } else {
    alert("You have entered an invalid email address!"); //The pop up alert for an invalid email address
    document.form1.text1.focus();
    return false;
  }
}

function verifyPassword(pw) {
  // var pw = document.getElementById("pswd").value;
  //check empty password field
  if (pw == "") {
    alert("**Fill the password please!");
    return false;
  }

  //minimum password length validation
  if (pw.length < 8) {
    alert("**Password length must be atleast 8 characters");
    return false;
  }

  //maximum length of password validation
  if (pw.length > 15) {
    alert("**Password length must not exceed 15 characters");
    return false;
  } else {
    // alert("Password is correct");
    return true;
  }
}

function user_SignUp() {
  let data = {
    Email: document.getElementById("email_input").value,
    Password: document.getElementById("password_input").value,
  };
  if (ValidateEmail(data.Email) && verifyPassword(data.Password)) {
    Server2 = Server + "/checkuser";
    var values;
    axios
      .post(Server2, data)
      .then((res) => {
        values=res.data;
        if(values.length>0){// user exists
            console.log(values[0].password+"  "+data.Password);
            if(values[0].password==data.Password){
                console.log("correct password");
                setCookie(data,1);
            }
            else{
                alert("wrong password");
            }
        }

        else{// user does not exist
            user_entry(data)
        }
          
          console.log(values);
        
        
      })
      .catch((err) => {
        console.log(err);
        return "4";
      });

  }
}

function user_entry(data){
    var Server2 = Server + "/ceateUser";
    
   
      axios
        .post(Server2, data)
        .then((res) => {
          console.log(res.data);
          setCookie(data ,0);
        })
        .catch((err) => {
          console.log(err);
        });

}

function setCookie(data,i){
    localStorage.setItem('user',JSON.stringify(data));
    if(i==0){
      window.location.href="form.html";
    }
    else if(i==1){
      window.location.href="account.html";
    }

}