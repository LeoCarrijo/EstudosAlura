import { NegociacaoController } from "./controllers/negociacao-controller.js"; // Colocar .js no final do arquivo importado
const controller = new NegociacaoController();
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adicionar();
});
