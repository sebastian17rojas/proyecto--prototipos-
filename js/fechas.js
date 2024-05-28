
document.getElementById('vueloForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const ida = document.getElementById('ida').value;
    const vuelta = document.getElementById('vuelta').value;
  
    if (ida && vuelta) {
        const screenWidth = window.screen.width;
        const screenHeight = window.screen.height;
        
        window.open('/html/page.html', '_blank', 'width=' + screenWidth + ',height=' + screenHeight);
    }
  });