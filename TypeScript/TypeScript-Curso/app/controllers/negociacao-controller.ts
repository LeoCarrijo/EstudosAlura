import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from '../models/negociacoes.js';

export class NegociacaoController {
    private _inpData: HTMLInputElement;
    private _inpQuatidade: HTMLInputElement;
    private _inpValor: HTMLInputElement;
    private _negociacoes = new Negociacoes();

    constructor() { // construtores não são tipados
        this._inpData = document.querySelector('#data');
        this._inpQuatidade = document.querySelector('#quantidade');
        this._inpValor = document.querySelector('#valor');
    }

    adicionar(): void {
        const negociacao = this.criarNegociacao();
        this._negociacoes.adicionar(negociacao);
        negociacao.data.setDate(12)
        console.log(this._negociacoes.listar());
        this.limparFormulario();
    }

    criarNegociacao(): Negociacao {
        const regex: RegExp = /-/g;
        const data = new Date(this._inpData.value.replace(regex, ','));
        const quantidade = parseInt(this._inpQuatidade.value);
        const valor = parseFloat(this._inpValor.value);
        return new Negociacao(data, quantidade ,valor);
    }

    limparFormulario(): void {
        this._inpData.value = '';
        this._inpQuatidade.value = '';
        this._inpValor.value = '';
        this._inpData.focus();
    }
}