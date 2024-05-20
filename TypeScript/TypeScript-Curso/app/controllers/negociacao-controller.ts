import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from '../models/negociacoes.js';
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
    private _inpData: HTMLInputElement;
    private _inpQuatidade: HTMLInputElement;
    private _inpValor: HTMLInputElement;
    private _negociacoes: Negociacoes = new Negociacoes();
    private _negociacoesView: NegociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagemView: MensagemView = new MensagemView('#mensagemView');

    constructor() { // construtores não são tipados
        this._inpData = document.querySelector('#data');
        this._inpQuatidade = document.querySelector('#quantidade');
        this._inpValor = document.querySelector('#valor');
        this._negociacoesView.update(this._negociacoes);
    }

    public adicionar(): void {
        const negociacao = this.criarNegociacao();
        if(!this.ehDiaUtil(negociacao.data)) {
            this._mensagemView.update("Apenas Negociações em Dias Úteis são Aceitas");
            return;
        }
        this._negociacoes.adicionar(negociacao);
        this.atualizaView();
        console.log(this._negociacoes.listar());
        this.limparFormulario();
    }

    private ehDiaUtil(data: Date): boolean {
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
    }

    private criarNegociacao(): Negociacao {
        const regex: RegExp = /-/g;
        const data = new Date(this._inpData.value.replace(regex, ','));
        const quantidade = parseInt(this._inpQuatidade.value);
        const valor = parseFloat(this._inpValor.value);
        return new Negociacao(data, quantidade ,valor);
    }

    private limparFormulario(): void {
        this._inpData.value = '';
        this._inpQuatidade.value = '';
        this._inpValor.value = '';
        this._inpData.focus();
    }

    private atualizaView(): void {
        this._negociacoesView.update(this._negociacoes)
        this._mensagemView.update("Negociação adicionada com Sucesso")
    }
}