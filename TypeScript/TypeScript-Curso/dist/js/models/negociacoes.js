export class Negociacoes {
    constructor() {
        this._negociacoes = [];
    }
    adicionar(negociacao) {
        this._negociacoes.push(negociacao);
    }
    listar() {
        // return [...this._negociacoes] // SpreadOperator - Pegua cada item dentro do array e coloca dentro de outro array
        return this._negociacoes;
    }
}
