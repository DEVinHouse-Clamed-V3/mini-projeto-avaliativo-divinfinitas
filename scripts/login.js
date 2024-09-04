document.addEventListener('DOMContentLoaded', function(event) {
    // Adiciona o manipulador de eventos ao botão de login
    document.getElementById('validaBotao').addEventListener('click', function(event) {
        // Captura os valores do formulário
        const email_digitado = document.getElementById('email').value;
        const senha_digitada = document.getElementById('senha').value;

        // Inicializa a flag de validade
        let isValid = true;

        /* ======= VALIDACAO DO FORMULARIO  ======= */

        if (email_digitado === "") {
            document.getElementById('email').style.borderColor = "red";
            document.getElementById('email').style.borderWidth = "2px";
            document.getElementById('error-email').innerText = "E-mail é obrigatório";
            isValid = false; // Formulário não é válido
        } else {
            document.getElementById('email').style.borderColor = "";
            document.getElementById('email').style.borderWidth = "";
            document.getElementById('error-email').innerText = "";
        }

        if (senha_digitada === "") {
            document.getElementById('senha').style.borderColor = "red";
            document.getElementById('senha').style.borderWidth = "2px";
            document.getElementById('error-senha').innerText = "Senha é obrigatória";
            isValid = false; // Formulário não é válido
        } else {
            document.getElementById('senha').style.borderColor = "";
            document.getElementById('senha').style.borderWidth = "";
            document.getElementById('error-senha').innerText = "";
        }

        // Adiciona ao localStorage e redireciona se o formulário for válido
        if (isValid) {
            let listaNoLocalStorage = JSON.parse(localStorage.getItem("cadastros")) || [];

            // Verifica se há um login correspondente na lista
            let verificaLogin = listaNoLocalStorage.find(cadastro => cadastro.email_digitado === email_digitado && cadastro.senha1_digitada === senha_digitada);
            
            if (verificaLogin) {
                // Se o login for encontrado, redireciona para a página desejada
                window.location.href = 'index.html';
            } else {
                // Se o login não for encontrado, exibe uma mensagem de erro
                alert("E-mail ou senha incorretos. Tente novamente.");
            }
        }
    });

    // Adiciona o manipulador de eventos ao botão de criar conta
    document.getElementById('criaConta').addEventListener('click', function() {
        window.location.href = 'cadastro.html';
    });
});