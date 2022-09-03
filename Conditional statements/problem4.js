let reg_userName = "ojas123@gmail.com";
let reg_userPass = "12345";

let ent_userName = "ojas123@gmail.com";
let ent_userPass = "12345";

if (ent_userName == reg_userName) {
  if (ent_userPass == reg_userPass) {
    console.log("Login");
  } else {
    console.log("Incorrect Password");
  }
} else {
  console.log("Invalid Username")
}