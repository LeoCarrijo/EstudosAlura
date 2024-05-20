export class View {
    constructor(seletor, escapar) {
        this._escapar = false;
        const _elemento = document.querySelector(seletor);
        if (_elemento) {
            this._elemento = _elemento;
        }
        else {
            throw Error(`Seletor ${seletor} não existe no HTML`);
        }
        if (escapar) {
            this._escapar = escapar;
        }
    }
    update(model) {
        let template = this.template(model);
        if (this._escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this._elemento.innerHTML = template;
    }
}
