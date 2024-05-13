export class Negociacao {
    private _data;
    private _quatidade;
    private _valor;

    constructor(data, quantidade, valor) {
        this._data = data
        this._quatidade = quantidade
        this._valor = valor
    }

    get data() {
        return this._data
    }

    get quatidade() {
        return this._quatidade
    }

    get valor() {
        return this._valor
    }

    get volume() {
        return this._quatidade * this._valor
    }
}