const signupForm = document.querySelector('#signupForm');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const passwordInput = document.querySelector('#password');

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const isUserRegistered = users.find(user => user.email === emailInput.value);

    if (isUserRegistered) {
        alert('El usuario ya está registrado');
        return;
    }

    const newUser = {
        name: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    alert('¡Registro Exitoso!');

    window.location.href = 'loginx.html';
});
