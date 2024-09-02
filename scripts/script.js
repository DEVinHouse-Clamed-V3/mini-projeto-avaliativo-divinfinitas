document.getElementById('medicamentoForm').addEventListener('submit', function(event) {
    console.log('Passei aqui funciton 1')
    event.preventDefault();
    
    const nome = document.getElementById('name').value;
    const laboratorio = document.getElementById('lab').value;
    const preco = document.getElementById('price').value;
    const imagem = document.getElementById('medicine-img').value;

    // Adiciona o medicamento ao localStorage
    adicionarMedicamento(nome, laboratorio, preco, imagem);
    this.reset();
});

function adicionarMedicamento(nome, laboratorio, preco, imagem) {
    const medicamentos = JSON.parse(localStorage.getItem('medicamentos')) || [];

    // Cria um objeto com os dados do medicamento
    const novoMedicamento = { nome, laboratorio, preco, imagem };

    // Adiciona o novo medicamento à lista existente
    medicamentos.push(novoMedicamento);

    // Atualiza o localStorage
    localStorage.setItem('medicamentos', JSON.stringify(medicamentos));

    // Renderiza a lista de medicamentos
    renderizarMedicamentos();
}




function renderizarMedicamentos() {
    const lista = document.getElementById('listaMedicamentos');
    lista.innerHTML = ''; // Limpa a lista antes de renderizar

    const medicamentos = JSON.parse(localStorage.getItem('medicamentos')) || [];

    // Renderiza cada medicamento na tela
    medicamentos.forEach((medicamento, index) => {
        const medicamentoItem = document.createElement('div');
        medicamentoItem.classList.add('medicamento-card', 'card', 'mb-3', 'p-3', 'shadow-sm');
        let thisUrl = medicamento.imagem
        medicamentoItem.innerHTML = `
            <img src="${medicamento.imagem}" alt="${medicamento.nome}" class="card-img-top mb-2">
            <div class="card-body">
                <h5 class="card-title">${medicamento.nome}</h5>
                <p class="card-text text-start mt-1"><strong>Laboratório:</strong> ${medicamento.laboratorio}</p>
                <p class="card-text text-start mt-2"><strong>Valor:</strong> R$ ${medicamento.preco}</p>
            </div>
            <div>
                <button class="btn btn-danger mt-3" onclick="deletarMedicamento(${index})">Deletar</button>
                <button type ="button" id="showBtn" class="btn btn-secondary mt-3" onclick="showImage(${index})">Mostrar</button>
            </div>
            
        `;

        lista.appendChild(medicamentoItem);
    });
}


function deletarMedicamento(index) {
    const medicamentos = JSON.parse(localStorage.getItem('medicamentos')) || [];
    medicamentos.splice(index, 1); // Remove o medicamento do array

    // Atualiza o localStorage com a nova lista
    localStorage.setItem('medicamentos', JSON.stringify(medicamentos));

    // Re-renderiza os medicamentos após a remoção
    renderizarMedicamentos();
}

// Chama a função para renderizar os medicamentos quando a página carregar
renderizarMedicamentos();

// Adiciona o evento DOMContentLoaded para carregar o usuário do localStorage
document.addEventListener("DOMContentLoaded", function() {
    if (!localStorage.getItem('username')) {
        localStorage.setItem('username', 'admin');
    }

    const username = localStorage.getItem('username');
    document.getElementById('loggedInUser').textContent = username ? username : 'Usuário não encontrado';
});

//chama o modal para exibir a imagem amplificada do produto ao clicar em "mostrar"
function showImage(index) {
    const medicamentos = JSON.parse(localStorage.getItem('medicamentos'));
    let URL = medicamentos[index].imagem;
    // mostra o modal, utilizando a API Sweetalert
    Swal.fire({
        imageUrl: URL,
        imageHeight: 500,
        imageAlt: "A tall image",
        confirmButtonText: "Voltar"
      })
};




