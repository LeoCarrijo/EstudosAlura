export class View {
    constructor(seletor) {
        this._elemento = document.querySelector(seletor);
    }
    template(model) {
        throw Error("Classe filha precisa implementar o método");
    }
    update(model) {
        const template = this.template(model);
        this._elemento.innerHTML = template;
    }
}
