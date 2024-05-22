let Val = document.getElementById("ingresar");
let user = document.getElementById("user");
let password = document.getElementById("password");

Val.addEventListener(`click`, function(evt){
    evt.preventDefault(); 
  
    if(password.value === ''){
        console.log('El campo contraseña es obligatorio');
        return false;
    } else if(user.value === ''){
        console.log('El campo de usuario es obligatorio');
        return false;
    } else if (user.value === "Brandon" && password.value === "1234"){
        window.location.href = "../html/index.html";
    } else {
        alert("Usuario o contraseña incorrectos");
        return false;
    }
});
