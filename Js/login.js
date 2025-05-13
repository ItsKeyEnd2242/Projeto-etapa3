document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const mensagemLogin = document.getElementById('mensagemLogin');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;

        // Em um cenário real, você verificaria esses dados em um servidor
        console.log('Tentativa de login com:', { email, senha });

        // Simulação básica de login (sem validação real)
        if (email === 'teste@email.com' && senha === '123456') {
            mensagemLogin.textContent = 'Login realizado com sucesso!';
            mensagemLogin.className = 'mensagem sucesso';
            // Redirecionar para a página principal após um breve período
            setTimeout(function() {
                window.location.href = 'index.html'; // Redireciona para a página inicial
            }, 1500);
        } else {
            mensagemLogin.textContent = 'Email ou senha incorretos.';
            mensagemLogin.className = 'mensagem erro';
        }
    });
});