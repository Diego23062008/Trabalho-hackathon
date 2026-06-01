 document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
       
        event.preventDefault(); 

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        if (email && password) {
          
            window.location.href = 'index.html';
        }
    });
});