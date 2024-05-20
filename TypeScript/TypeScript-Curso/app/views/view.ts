export abstract class View<T> {
    protected _elemento: HTMLElement;

    constructor(seletor: string) {
        this._elemento = document.querySelector(seletor);
    }

    protected abstract template(model: T): string;

    public update(model: T): void {
        const template = this.template(model);
        this._elemento.innerHTML = template;
    }
}