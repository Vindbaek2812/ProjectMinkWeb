    var attempt = 3;
    function validated(){
      var username = document.getElementById("uname").value;
      var password = document.getElementById("psw").value;
    
      var username_error = document.getElementById('uname_error');
      var password_error = document.getElementById('password_error');
    if (username == "forget" && password =="forget#123"){
      alert ("login succesfuly");
      return false;
    }
 else {
   attemt --;
   alert("you have left "+attempt+" attempt;");
   if(attempt == 0){
     document.getElementById("username").disabled = true;
     document.getElementById("password").disabled = true;
     document.getElementById("submit").disabled = true;
     return false;
   }

 
    }
  }


/*
var objPeople = [
  {
    username: "sam",
    password: "codify"
  }
]

function getInfo(){
  var username = Document.getElementById("username").value
  var password = document.getElementById("password").value
  console.log("you're username is " + username + "and your password is +" + password)
}
*/