export class Clazz {
    static stat = 10;

    private pri: number;
    public pub = 2;  // default is public
    protected pro = 3; // Visibilidad en la clase e hijas

    private _value = 666; // Con get & set se procesa como publico. Type:number

    constructor(private x: number, private y?: number, pri?: number) { // Se define y se asigna automaticamente
        this.pri = pri; // Si no se define en el constructor se debe asignar manualmente
    }

    getX(): number {
        return this.x; // this es obligatorio
    }

    setX(x: number) {
        this.x = x;
    }

    getY(): number {
        return this.y; // this es obligatorio
    }

    setY(y: number) {
        this.y = y;
    }

    get value() { // Para procesar como publico: x = unClazz.value
        return this._value;
    }

    set value(value: number) { // Para procesar como publico: unClazz.value = 10;
        this._value = value;
    }

    getPri() {
        return this.pri;
    }

    toString() {
        return '[x:' + this.x + ', y:' + this.y + ', pri:' + this.pri + ']';
    }

}
