 document.addEventListener('DOMContentLoaded', () => {
    const profileTrigger = document.getElementById('profileTrigger');
    const profileDropdown = document.getElementById('profileDropdown');
    const deleteAccountBtn = document.getElementById('deleteAccountBtn');

    if (profileTrigger && profileDropdown) {
        profileTrigger.addEventListener('click', (event) => {
            event.stopPropagation(); 
            profileDropdown.classList.toggle('active');
        });
    }

    document.addEventListener('click', () => {
        if (profileDropdown && profileDropdown.classList.contains('active')) {
            profileDropdown.classList.remove('active');
        }
    });

    if (deleteAccountBtn) {
        deleteAccountBtn.addEventListener('click', (event) => {
            event.preventDefault();
            
            const confirmacao = confirm("ATENÇÃO: Tem certeza de que deseja eliminar permanentemente a sua conta do Cidade Segura?");
            
            if (confirmacao) {
                const confirmacaoFinal = confirm("Esta ação não poderá ser desfeita. Confirmar a exclusão da conta?");
                if (confirmacaoFinal) {
                  
                    window.location.href = 'login.html';
                }
            }
        });
    }
});