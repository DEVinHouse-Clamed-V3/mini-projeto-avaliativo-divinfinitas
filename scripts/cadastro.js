document.getElementById('cadastroForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Previne o envio do formulário

    // Captura os valores do formulário
    const nome_digitado = document.getElementById('nome').value;
    const cpf_digitado = document.getElementById('cpf').value;
    const tel_digitado = document.getElementById('telefone').value;
    const data_digitada = document.getElementById('data').value;
    const genero_selecionado = document.getElementById('genero').value;
    const email_digitado = document.getElementById('email').value;
    const senha1_digitada = document.getElementById('senha1').value;
    const senha2_digitada = document.getElementById('senha2').value;

    // Validação
    let isValid = true;

    if (nome_digitado === "") {
        document.getElementById('nome').style.borderColor = "red";
        document.getElementById('error-nome').innerText = "Nome é obrigatório";
        isValid = false;
    } else {
        document.getElementById('nome').style.borderColor = "";
        document.getElementById('error-nome').innerText = "";
    }

    if (cpf_digitado === "") {
        document.getElementById('cpf').style.borderColor = "red";
        document.getElementById('error-cpf').innerText = "CPF é obrigatório";
        isValid = false;
    } else {
        document.getElementById('cpf').style.borderColor = "";
        document.getElementById('error-cpf').innerText = "";
    }

    if (tel_digitado === "") {
        document.getElementById('telefone').style.borderColor = "red";
        document.getElementById('error-tel').innerText = "Telefone é obrigatório";
        isValid = false;
    } else {
        document.getElementById('telefone').style.borderColor = "";
        document.getElementById('error-tel').innerText = "";
    }

    if (data_digitada === "") {
        document.getElementById('data').style.borderColor = "red";
        document.getElementById('error-data').innerText = "Data é obrigatória";
        isValid = false;
    } else {
        document.getElementById('data').style.borderColor = "";
        document.getElementById('error-data').innerText = "";
    }

    if (genero_selecionado === "Selecione") {
        document.getElementById('genero').style.borderColor = "red";
        document.getElementById('error-genero').innerText = "Gênero é obrigatório";
        isValid = false;
    } else {
        document.getElementById('genero').style.borderColor = "";
        document.getElementById('error-genero').innerText = "";
    }

    if (email_digitado === "") {
        document.getElementById('email').style.borderColor = "red";
        document.getElementById('error-email').innerText = "E-mail é obrigatório";
        isValid = false;
    } else {
        document.getElementById('email').style.borderColor = "";
        document.getElementById('error-email').innerText = "";
    }

    if (senha1_digitada === "" || senha2_digitada === "") {
        document.getElementById('senha1').style.borderColor = "red";
        document.getElementById('senha2').style.borderColor = "red";
        document.getElementById('error-senha1').innerText = "Senha é obrigatória";
        document.getElementById('error-senha2').innerText = "Senha é obrigatória";
        isValid = false;
    } else if (senha1_digitada !== senha2_digitada) {
        document.getElementById('senha1').style.borderColor = "red";
        document.getElementById('senha2').style.borderColor = "red";
        document.getElementById('error-senha1').innerText = " Senhas não coincidem";
        document.getElementById('error-senha2').innerText = "Senhas não coincidem";
        isValid = false;
    } else {
        document.getElementById('senha1').style.borderColor = "";
        document.getElementById('senha2').style.borderColor = "";
        document.getElementById('error-senha1').innerText = "";
        document.getElementById('error-senha2').innerText = "";
    }

    if (isValid) {
        adicionarCadastro(nome_digitado, cpf_digitado, tel_digitado, data_digitada, genero_selecionado, email_digitado, senha1_digitada, senha2_digitada);
        this.reset();
        window.location.href = 'login.html';
    }

});

function adicionarCadastro(nome_digitado, cpf_digitado, tel_digitado, data_digitada, genero_selecionado, email_digitado, senha1_digitada, senha2_digitada) {
    const cadastros = JSON.parse(localStorage.getItem('cadastros')) || [];

    // Cria um objeto com os dados do cadastro
    const novoCadastro = { nome_digitado, cpf_digitado, tel_digitado, data_digitada, genero_selecionado, email_digitado, senha1_digitada, senha2_digitada };

    console.log('Novo cadastro:', novoCadastro); // Verifica se os dados estão corretos

    // Adiciona o novo cadastro à lista existente
    cadastros.push(novoCadastro);

    // Atualiza o localStorage
    localStorage.setItem('cadastros', JSON.stringify(cadastros));

    console.log('Cadastros no localStorage:', JSON.parse(localStorage.getItem('cadastros'))); // Verifica o conteúdo do localStorage
}