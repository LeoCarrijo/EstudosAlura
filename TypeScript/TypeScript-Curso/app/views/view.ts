export class View<T> {
    protected _elemento: HTMLElement;

    constructor(seletor: string) {
        this._elemento = document.querySelector(seletor);
    }

    template(model: T): string {
        throw Error("Classe filha precisa implementar o método")
    }

    update(model: T): void {
        const template = this.template(model);
        this._elemento.innerHTML = template;
    }
}