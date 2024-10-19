const  form            = document.getElementById("form");
const  username        = document.getElementById("username");
const  email           = document.getElementById("email");
const  password        = document.getElementById("password");
const  cpassword       = document.getElementById("cpassword");
const  phone           = document.getElementById("phone");
const  DOB             = document.getElementById("DOB");


//____________________________ERROR MSG_______________________________

function errorMsg(input, msg) {
  const form_control = input.parentElement;
  // console.log(form_control);
  form_control.className = "form-control error";
  const small = form_control.querySelector("small");
  // console.log(small);
  small.innerText = msg;
}

//______________________success function________________

function successMsg(input) {
  const form_control = input.parentElement;
  form_control.className = "form-control success";

}

//emai function

function ValidateEmail(mail) {

}


// ______________________Function TO VALIDATE ALL FIELDS_________________

function validateAll(inputArr){
  input.forEach(function(input){

  })
}

//_________________________EVENT LISTENER__________________________

form.addEventListener("submit", function (e){
  e.preventDefault();

  
  if(username.value === "")

}); 