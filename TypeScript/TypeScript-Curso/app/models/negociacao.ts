export class Negociacao {

    constructor(
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number
    ) {}

    get volume(): number {
        return this.quantidade * this.valor
    }

    get data(): Date {
        const data = new Date(this._data.getTime())
        return data
    }

    public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao {
        const regex: RegExp = /-/g;
        const data = new Date(dataString.replace(regex, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(data, quantidade ,valor);
    }
}