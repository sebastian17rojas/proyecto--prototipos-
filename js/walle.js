  // Seleccionar la ventana emergente y el botón de cierre
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('#close-modal');

// Función para ocultar la ventana emergente
const hideModal = () => {
  modal.style.display = 'none';
}

// Función para mostrar la ventana emergente
const showModal = () => {
  modal.style.display = 'block';
}

// Agregar un evento de clic al botón de cierre para ocultar la ventana emergente
closeModal.addEventListener('click', hideModal);

// Agregar un evento de clic al documento para ocultar la ventana emergente cuando se hace clic fuera de ella
document.addEventListener('click', (event) => {
  if (event.target === modal) {
    hideModal();
  }
});

// Seleccionar la imagen de Bitcoin
const bitcoinImage = document.querySelector('img[src="../IMG/Screenshot from 2024-05-22 09-07-57.png"]');

// Agregar un evento de clic a la imagen de Bitcoin para mostrar la ventana emergente
bitcoinImage.addEventListener('click', showModal);
