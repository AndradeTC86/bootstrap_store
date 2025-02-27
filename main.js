const ativadorToast = document.getElementById('botao-notificação')
        const mensagens = document.getElementById('notificações')

        ativadorToast.addEventListener('click', function() {
            new bootstrap.Toast(mensagens).show()
        })