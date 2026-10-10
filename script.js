const botao = document.querySelector('#btn-inscricao');
const mensagem = document.querySelector('#mensagem-sucesso');

botao.addEventListener('click', function() {

    mensagem.textContent = "Inscrição confirmada! Fique de olho no seu e-mail.";

    botao.style.backgroundColor = "#10B981";
    botao.textContent = "Inscrito!";
});