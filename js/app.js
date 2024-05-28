
/*
The code uses the document.getElementById() function to select the HTML element with the nav_bar ID and then uses the innerHTML property to add a navigation bar with a logo, a menu button and a list of links.
*/
  document.getElementById("nav_bar").innerHTML = `
  <header class="header">
  <div class="logo">
    <a href="../html/index.html">
    <img src="../IMG/trip-coin azul.png" alt="Logo">
    </a>
</div>
    <button class="button">
      <svg class="svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
    </button>

    <nav class="nav">
        <ul class="ul">
            <li class="li"><a href="ofertas.html" class="a">Ofertas y destinos</a></li>
            <li class="li"><a href="reserva-vuelo.html" class="a">Reservar vuelos</a></li>
            <li class="li"><a href="help.html" class="a">Ayuda</a></li>
            <li class="li" id="login"><a href="loginx.html" class="a">Login</a></li>
        </ul>
    </nav>
</header>
`
/*
The code uses the document.querySelector() function to select the HTML element with the button class and then uses the addEventListener() function to add a click event to the button. When the button is clicked, the function classList.toggle() is used to add or remove the active class to the HTML element with the class nav.
*/
const button = document.querySelector('.button')
const nav    = document.querySelector('.nav')

button.addEventListener('click',()=>{
    nav.classList.toggle('activo')
})

/*
The code uses the document.querySelectorAll() function to select all HTML elements with the ID box_chekin and then uses the forEach() function to add a click event to each element. When a box is clicked, the getAttribute() function is used to get the value of the data-url attribute and then the window.location.href function is used to redirect to the specified URL.
*/
document.addEventListener('DOMContentLoaded', (event) => {
  const cajas = document.querySelectorAll('#box_chekin');
  cajas.forEach(caja => {
    caja.addEventListener('click', () => {
      const url = caja.getAttribute('data-url');
      if (url) {
        window.location.href = url;
      }
    });
  });
});

/*
El código utiliza la función document.querySelectorAll() para seleccionar todos los elementos HTML con la clase caja y luego utiliza la función forEach() para agregar un evento de clic a cada elemento. Cuando se hace clic en una caja, se utiliza la función getAttribute() para obtener el valor del atributo data-url y luego se utiliza la función window.open() para abrir la URL especificada en una nueva ventana.
*/

document.addEventListener('DOMContentLoaded', (event) => {
    const cajas = document.querySelectorAll('.caja');
    cajas.forEach(caja => {
      caja.addEventListener('click', () => {
        const url = caja.getAttribute('data-url');
        if (url) {
          window.open(url , '_blank', 'width=600,height=400');
        }
      });
    });
  });

/*
The code uses the test_check() function to validate the values entered in two text fields with the IDs reservation_code and last_name. If the values entered match the expected values, the window.location.href function is used to redirect to the specified URL. If the values entered do not match the expected values, an alert message is displayed.
*/

  function test_check() {
    const reservationCode = document.getElementById('reservation_code').value;
    const lastName = document.getElementById('last_name').value;
  
    if (reservationCode === "1234" && lastName === "rodriguez") {
      window.location.href = "/html/fly_details.html"; 
      return false; 
    }
    else if (reservationCode != `1234` && lastName != `rodriguez`) {
      return alert('informacion incorrecta');
    }
    
  }

  