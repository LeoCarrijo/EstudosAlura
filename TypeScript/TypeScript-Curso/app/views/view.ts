export abstract class View<T> {
    protected _elemento: HTMLElement;
    private _escapar:boolean = false;

    constructor(seletor: string, escapar?: boolean) {
        this._elemento = document.querySelector(seletor);
        if(escapar) {
            this._escapar = escapar
        }
    }

    protected abstract template(model: T): string;

    public update(model: T): void {
        let template = this.template(model);
        if(this._escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '')
        }
        this._elemento.innerHTML = template;
    }
}