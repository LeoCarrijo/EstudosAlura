export class Negociacao {
    #data;
    #quatidade;
    #valor;

    constructor(data, quantidade, valor) {
        this.#data = data;
        this.#quatidade = quantidade;
        this.#valor = valor;
    }
}