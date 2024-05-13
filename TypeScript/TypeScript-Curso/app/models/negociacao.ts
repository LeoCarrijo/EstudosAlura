export class Negociacao {
    private _data: Date;
    private _quatidade: number;
    private _valor: number;

    constructor(data: Date, quantidade: number, valor: number) {
        this._data = data
        this._quatidade = quantidade
        this._valor = valor
    }

    get data(): Date {
        return this._data
    }

    get quatidade(): number {
        return this._quatidade
    }

    get valor(): number {
        return this._valor
    }

    get volume(): number {
        return this._quatidade * this._valor
    }
}