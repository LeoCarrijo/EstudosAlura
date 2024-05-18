import { Negociacao } from "../models/negociacao.js";
export class NegociacaoController {
    constructor() {
        this._inpData = document.querySelector('#data');
        this._inpQuatidade = document.querySelector('#quantidade');
        this._inpValor = document.querySelector('#valor');
    }
    adicionar() {
        const negociacao = this.criarNegociacao();
        console.log(negociacao);
        this.limparFormulario();
    }
    criarNegociacao() {
        const regex = /-/g;
        const data = new Date(this._inpData.value.replace(regex, ','));
        const quantidade = parseInt(this._inpQuatidade.value);
        const valor = parseFloat(this._inpValor.value);
        return new Negociacao(data, quantidade, valor);
    }
    limparFormulario() {
        this._inpData.value = '';
        this._inpQuatidade.value = '';
        this._inpValor.value = '';
        this._inpData.focus();
    }
}