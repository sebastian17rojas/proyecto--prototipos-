document.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(localStorage.getItem('login_success'));
    if (!user) {
        window.location.href = 'loginx.html';
    }

    const logout = document.querySelector('#logout');

    logout.addEventListener('click', () => {
        alert('¡Hasta pronto!');
        localStorage.removeItem('login_success');
        window.location.href = 'loginx.html'; 
    });
});
