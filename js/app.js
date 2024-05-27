
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
            <li class="li"><a href="page.html" class="a">Metodos de pago</a></li>
            <li class="li"><a href="ofertas.html" class="a">Ofertas y destinos</a></li>
            <li class="li"><a href="reserva-vuelo.html" class="a">Reservar vuelos</a></li>
            <li class="li"><a href="help.html" class="a">Ayuda</a></li>
            <li class="li" id="login"><a href="loginx.html" class="a">Login</a></li>
        </ul>
    </nav>
</header>
`

/* Cuando hago CLICK .button, .nav TOGGLE 'activo' */
const button = document.querySelector('.button')
const nav    = document.querySelector('.nav')

button.addEventListener('click',()=>{
    nav.classList.toggle('activo')
})







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
