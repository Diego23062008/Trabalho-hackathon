 document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
        
        event.preventDefault();

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const telefone = document.getElementById('telefone').value;
        const password = document.getElementById('password').value;

        if (nome && email && telefone && password) {
           
            window.location.href = 'index.html';
        }
    });
});