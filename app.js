//Aplicação JS Solar Search//
//Dev.Luan Freire//
import { dados } from "./dados.js"; //Importa Dados//


const btnPesquisar = document.getElementById("btnPesquisar");
const campoBusca = document.getElementById("campoBusca");
const boxModal = document.getElementById("modalResultados");
const direitosAutorais = document.querySelector(".direitosAutorais");
const falhaPesquisa = document.querySelector(".falhaPesquisa");

//Função de click, e verificação de buscas//
btnPesquisar.addEventListener("click", function () {

    //Função de input vazio//
    if (campoBusca.value === "" || campoBusca.value === null) {
        const paragrafoFalha = document.getElementById("paragrafoFalha")
        falhaPesquisa.style.display = "block"
        direitosAutorais.style.display = "none"
        paragrafoFalha.textContent = "Por favor, digite algo no campo de busca."
        return false
    };

    //Funções para transformar as strings em minúsculas, remover diacritícos e remover espaços//
    const valorInput = campoBusca.value.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const inputResultado = dados.find(dado =>
        dado.titulo.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(valorInput)
    );

    if (inputResultado) {
        boxModal.innerHTML = `<div class="modal">
                <div class="modalHeader">
                    <h2>${inputResultado.titulo}</h2>
                    <i class="bi bi-x-square-fill close-modal"></i>
                </div>
                <div class="modalMain">
                    <p>${inputResultado.descricao}</p>
                    <img src="${inputResultado.image}">
                </div>
            </div>`
        boxModal.style.display = "block";

        //Fechar Modal//
        const closeModal = document.querySelector(".close-modal");
        closeModal.addEventListener('click', () => {
            boxModal.style.display = "none";
        });
    } else {
        falhaPesquisa.style.display = "block"
        direitosAutorais.style.display = "none";
    }

    //Limpar Input//
    document.getElementById("campoBusca").value = "";

    //Alerta de campo Input vazio//
});

//Fechar o Modal de Falha na Busca//
const closeFalhar = document.querySelector(".closeFalhar");
closeFalhar.addEventListener("click", () => {
    falhaPesquisa.style.display = "none";
    direitosAutorais.style.display = "flex";
});





