function login(){
    let user = document.getElementById("user").value; 
    let password = document.getElementById("password").value; 
    
    if(user === "Brandon" && password === "1234"){
       window.location = "index.html";
    } else {
       alert("Datos incorrectos"); 
    }
 }
 