import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private _negociacoes: Negociacao[] = []

    public adicionar(negociacao: Negociacao) {
        this._negociacoes.push(negociacao)
    }

    public listar(): readonly Negociacao[] {
        // return [...this._negociacoes] // SpreadOperator - Pegua cada item dentro do array e coloca dentro de outro array
        return this._negociacoes
    }
}
