       // Seleccionar elementos
const openModalButton = document.getElementById('open-modal');
const closeModalButton = document.getElementById('close-modal');
const modal = document.getElementById('modal');

// Función para abrir la ventana emergente
openModalButton.addEventListener('click', () => {
  modal.style.display = 'block';
});

// Función para cerrar la ventana emergente
closeModalButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Función para cerrar la ventana emergente al hacer clic fuera de ella
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});




window.onload = function() {
  
        floatingTab.innerHTML = ` 
<button id="open-modal">Ver métodos de pago</button>


<!-- Ventana emergente -->

<div id="modal" class="modal">

  <!-- Contenido de la ventana emergente -->

  <div class="modal-content">

    <h1>Centro de Control</h1>
    <div class="icons">
                                    <div class="tarjeta">
                                        <div class="icono1"><i class="fa-solid fa-arrow-up"></i></div>
                                        <div class="enviar">enviar</div>
                                    </div>

                                    <div class="tarjeta">
                                        <div class="icono2"><i class="fa-solid fa-qrcode"></i></div>
                                        <div class="recibir">recibir</div>
                                    </div>
                                    <div class="tarjeta">
                                        <div class="icono3"><i class="fa-solid fa-wifi"></i></div>
                                        <div class="puente">puente</div>
                                    </div>

                                    <div class="tarjeta">
                                        <div class="icono4"><i class="fa-solid fa-arrow-right-arrow-left"></i></div>
                                        <div class="intercambiar">intercambiar</div>
                                    </div>
                                    <div class="tarjeta">
                                        <div class="icono5"><i class="fa-solid fa-tag"></i></div>
                                        <div class="comprar">comprar</div>
                                    </div>

                                </div>
<hr>
<h2>Enviar A</h2>

<div class="inputBox"><input type="contenedor-texto" placeholder="introduce la direcion 0x"> <i class="fa-solid fa-address-book"></i></div>

<h2>Cantidad<div class="texto">Equilibrio 0 AVAX</div> </h2> 




<div class="cantidad"><div class="inputBox"><input class="gris" type="contenedor-texto" placeholder="0.0" >  </div></div>

    <button id="close-modal">Cerrar</button>
                                
        `  
        document.body.appendChild(floatingTab);
    
}