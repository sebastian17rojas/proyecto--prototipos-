window.onload = function() {
    var paymentMethodImage = document.getElementById('payment-method-image');
    paymentMethodImage.addEventListener('click', function() {
        var floatingTab = document.createElement('div');
        floatingTab.style.position = 'fixed';
        floatingTab.style.right = '20px';
        floatingTab.style.bottom = '20px';
        floatingTab.style.backgroundColor = '#000000';
        floatingTab.style.padding = '10px';
        floatingTab.style.borderRadius = '50px #ccc';
        floatingTab.style.borderRadius = '5px';
        floatingTab.style.width ='24%';
        floatingTab.style.height ='50%';
       floatingTab.style.color = '#000000';
        floatingTab.innerHTML = ` <header>
        
        <h1>
            Centro de Control
        </h1>


    </header>


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

`  
        document.body.appendChild(floatingTab);
    });
}
