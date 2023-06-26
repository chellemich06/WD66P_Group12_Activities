function myFunction() {
    var x = document.getElementById("empty");
    var y = document.getElementById("incorrect");
    var z = document.getElementById("correct");

    var e = document.getElementById("email").value;
    var p = document.getElementById("password").value;

    if (e == "admin" && p == "12345") {
      x.style.display = "none";
      z.style.display = "block";
      y.style.display = "none";
      document.getElementById("email").value = "";
      document.getElementById("password").value = "";
    } else if(e == "" && p == ""){
      x.style.display = "block";
      y.style.display = "none";
      z.style.display = "none";
      document.getElementById("email").value = "";
      document.getElementById("password").value = "";
    } else if(e != "admin" && p != "12345"){
      x.style.display = "none";
      y.style.display = "block";
      z.style.display = "none";
      document.getElementById("email").value = "";
      document.getElementById("password").value = "";
    } return false;
      
    
  }