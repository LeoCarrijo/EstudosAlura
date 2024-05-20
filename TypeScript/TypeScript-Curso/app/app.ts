import { NegociacaoController } from "./controllers/negociacao-controller.js"; // Colocar .js no final do arquivo importado
import { NegociacoesView } from "./views/negociacoes-view.js";
import { View } from "./views/view.js";

const controller = new NegociacaoController();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adicionar();
    })
} else { 
    throw Error("'.form' não Existente")
}
