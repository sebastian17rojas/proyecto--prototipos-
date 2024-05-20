let Val = document.getElementById("ingresar");
let user = document.getElementById("user");
let password = document.getElementById("password");

Val.addEventListener(`click`, function(){
   if(password.value === ''){
        
      console.log('el campo contraseña es obligatorio')
      evt.preventDefault();
      return false;
  
  }else if(user.value === ''){
  
  console.log('el campo de usuario es obligatorio')
      evt.preventDefault();
      return false;
  }

  else if (user.value === "Brandon" && password.value === "1234"){
    alert("todo correcto")
      window.location.assign = "../html/index.html";
  }
})