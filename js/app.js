
  document.getElementById("nav_bar").innerHTML = `
  <div class="logo">
      <a href="../html/index.html">
      <img src="/IMG/trip-coin azul.png" alt="Logo">
      </a>
  </div>
  <nav id="header_nav">
       <!--<div class='title pointerCursor'>Select an option <i class="fa fa-angle-right"></i></div>
      <div class='menu pointerCursor hide'>-->
          <ul>
              <li><a href="ofertas.html">Ofertas</a></li>
              <li><a href="reserva-vuelo.html">Reservar vuelos</a></li>
              <li><a href="page.html">Métodos de pago</a></li>
              <li><a href="help.html">Ayuda</a></li>
              <a href="../html/login.html"><button id="z">login</button></a>
          
          </ul>
      </div>
  </nav>
`

document.addEventListener('DOMContentLoaded', (event) => {
    const cajas = document.querySelectorAll('.caja');
    cajas.forEach(caja => {
      caja.addEventListener('click', () => {
        const url = caja.getAttribute('data-url');
        if (url) {
          window.location.href = url;
        }
      });
    });
  });
