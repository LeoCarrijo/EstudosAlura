import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from '../models/negociacoes.js';
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        this._negociacoesView = new NegociacoesView('#negociacoesView', true);
        this._mensagemView = new MensagemView('#mensagemView');
        this._inpData = document.querySelector('#data');
        this._inpQuatidade = document.querySelector('#quantidade');
        this._inpValor = document.querySelector('#valor');
        this._negociacoesView.update(this._negociacoes);
    }
    adicionar() {
        const negociacao = Negociacao.criaDe(this._inpData.value, this._inpQuatidade.value, this._inpValor.value);
        if (!this.ehDiaUtil(negociacao.data)) {
            this._mensagemView.update("Apenas Negociações em Dias Úteis são Aceitas");
            return;
        }
        this._negociacoes.adicionar(negociacao);
        this.atualizaView();
        console.log(this._negociacoes.listar());
        this.limparFormulario();
    }
    ehDiaUtil(data) {
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
    }
    limparFormulario() {
        this._inpData.value = '';
        this._inpQuatidade.value = '';
        this._inpValor.value = '';
        this._inpData.focus();
    }
    atualizaView() {
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update("Negociação adicionada com Sucesso");
    }
}
