document.addEventListener('DOMContentLoaded', function(event) {
  
    // Adiciona o manipulador de eventos ao botão de login
    document.getElementById('validaCadastro').addEventListener('click', function(event) {
        // Captura os valores do formulário
        const nome_digitado = document.getElementById('nome').value;
        const cpf_digitado = document.getElementById('cpf').value;
        const tel_digitado = document.getElementById('tel').value;
        const data_digitada = document.getElementById('data').value;
        const genero_selecionado = document.getElementById('genero').value;
        const email_digitado = document.getElementById('email').value;
        const senha1_digitada = document.getElementById('senha1').value;
        const senha2_digitada = document.getElementById('senha2').value;

        
        // Inicializa a flag de validade
        let isValid = true;

        /* ======= VALIDACAO DO FORMULARIO  ======= */
        if (nome_digitado === "") {
            document.getElementById('nome').style.borderColor = "red";
            document.getElementById('nome').style.borderWidth = "2px";
            document.getElementById('error-nome').innerText = "Nome é obrigatório";
            isValid = false; // Formulário não é válido
        } else {
            document.getElementById('nome').style.borderColor = "";
            document.getElementById('nome').style.borderWidth = "";
            document.getElementById('error-nome').innerText = "";
        }

        if (cpf_digitado === "") {
            document.getElementById('cpf').style.borderColor = "red";
            document.getElementById('cpf').style.borderWidth = "2px";
            document.getElementById('error-cpf').innerText = "CPF é obrigatório";
            isValid = false; // Formulário não é válido
        } else {
            document.getElementById('cpf').style.borderColor = "";
            document.getElementById('cpf').style.borderWidth = "";
            document.getElementById('error-cpf').innerText = "";
        }

        if (tel_digitado === "") {
            document.getElementById('tel').style.borderColor = "red";
            document.getElementById('tel').style.borderWidth = "2px";
            document.getElementById('error-tel').innerText = "Telefone é obrigatório";
            isValid = false; // Formulário não é válido
        } else {
            document.getElementById('tel').style.borderColor = "";
            document.getElementById('tel').style.borderWidth = "";
            document.getElementById('error-tel').innerText = "";
        }

        if (data_digitada === "") {
            document.getElementById('data').style.borderColor = "red";
            document.getElementById('data').style.borderWidth = "2px";
            document.getElementById('error-data').innerText = "Telefone é obrigatório";
            isValid = false; // Formulário não é válido
        } else {
            document.getElementById('tel').style.borderColor = "";
            document.getElementById('tel').style.borderWidth = "";
            document.getElementById('error-tel').innerText = "";
        }

        if (genero_selecionado === "Selecione") {
            document.getElementById('genero').style.borderColor = "red";
            document.getElementById('genero').style.borderWidth = "2px";
            document.getElementById('error-genero').innerText = "Gênero é obrigatório";
            isValid = false; // Formulário não é válido
        } else {
            document.getElementById('genero').style.borderColor = "";
            document.getElementById('genero').style.borderWidth = "";
            document.getElementById('error-genero').innerText = "";
        }

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

        if (senha1_digitada === "") {
            document.getElementById('senha1').style.borderColor = "red";
            document.getElementById('senha1').style.borderWidth = "2px";
            document.getElementById('error-senha1').innerText = "Senha é obrigatória";
            isValid = false; // Formulário não é válido
        } else {
            document.getElementById('senha1').style.borderColor = "";
            document.getElementById('senha1').style.borderWidth = "";
            document.getElementById('error-senha1').innerText = "";
        }

        if (senha2_digitada === "") {
            document.getElementById('senha2').style.borderColor = "red";
            document.getElementById('senha2').style.borderWidth = "2px";
            document.getElementById('error-senha2').innerText = "Senha é obrigatória";
            isValid = false; // Formulário não é válido
        } else {
            document.getElementById('senha2').style.borderColor = "";
            document.getElementById('senha2').style.borderWidth = "";
            document.getElementById('error-senha2').innerText = "";
        }

        // Adiciona ao localStorage e redireciona se o formulário for válido
        if (isValid) {
            // Cria um objeto de login
            const cadastro = {
                id: Date.now(), // Usando Date.now() para garantir um id único
                nome: nome_digitado,
                cpf: cpf_digitado,
                tel: tel_digitado,
                data: data_digitada,
                genero: genero_selecionado,
                email: email_digitado,
                senha1: senha1_digitada,
                senha2: senha2_digitada,
            };

            let listaNoLocalStorage = JSON.parse(localStorage.getItem("logins")) || [];

            // Verifica se há um login correspondente na lista
            let verificaLogin = listaNoLocalStorage.find(login => login.email === email_digitado && login.senha === senha_digitada);
            
            if (verificaLogin) {
                // Se o login for encontrado, redireciona para a página desejada
                window.location.href = 'login.html';
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
