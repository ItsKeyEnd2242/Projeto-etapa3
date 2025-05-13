document.addEventListener('DOMContentLoaded', function() {
    const cadastroForm = document.getElementById('cadastroForm');
    const mensagemCadastro = document.getElementById('mensagemCadastro');

    cadastroForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;
        const confirmarSenha = document.getElementById('confirmarSenha').value;

        if (senha !== confirmarSenha) {
            mensagemCadastro.textContent = 'As senhas não coincidem.';
            mensagemCadastro.className = 'mensagem erro';
            return;
        }

        // Em um cenário real, você enviaria esses dados para um servidor
        console.log('Dados de cadastro:', { nome, email, senha });
        mensagemCadastro.textContent = 'Cadastro realizado com sucesso!';
        mensagemCadastro.className = 'mensagem sucesso';
        cadastroForm.reset(); // Limpa o formulário
    });
});