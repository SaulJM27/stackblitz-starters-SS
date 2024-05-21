class Carta {
    private _nombreAlumno: HTMLInputElement;
    private _matricula: HTMLInputElement;
    private _carreraAlumno: HTMLInputElement;
    private _institucion: HTMLInputElement;
    private _supervisor: HTMLInputElement;
    private _fechaInicio: HTMLInputElement;
    private _fechaFin: HTMLInputElement;
    private _fechaExtension: HTMLInputElement;
  

    constructor() {
        this._nombreAlumno = document.getElementById('nombre_alumno') as HTMLInputElement;
        this._matricula = document.getElementById('matricula') as HTMLInputElement;
        this._carreraAlumno = document.getElementById('carrera_alumno') as HTMLInputElement;
        this._institucion = document.getElementById('institucion') as HTMLInputElement;
        this._supervisor = document.getElementById('supervisor') as HTMLInputElement;
        this._fechaInicio = document.getElementById('fecha_inicio') as HTMLInputElement;
        this._fechaFin = document.getElementById('fecha_fin') as HTMLInputElement;
        this._fechaExtension = document.getElementById('fecha_extension') as HTMLInputElement;
       
    }



    set nombreAlumno(value: string) {
        this._nombreAlumno.value = value;
    }

    get nombreAlumno(): string {
        return this._nombreAlumno.value;
    }

    set matricula(value: string) {
        this._matricula.value = value;
    }

    get matricula(): string {
        return this._matricula.value;
    }

    set carreraAlumno(value: string) {
        this._carreraAlumno.value = value;
    }

    get carreraAlumno(): string {
        return this._carreraAlumno.value;
    }

    set institucion(value: string) {
        this._institucion.value = value;
    }

    get institucion(): string {
        return this._institucion.value;
    }

    set supervisor(value: string) {
        this._supervisor.value = value;
    }

    get supervisor(): string {
        return this._supervisor.value;
    }

    set fechaInicio(value: string) {
        this._fechaInicio.value = value;
    }

    get fechaInicio(): string {
        return this._fechaInicio.value;
    }

    set fechaFin(value: string) {
        this._fechaFin.value = value;
    }

    get fechaFin(): string {
        return this._fechaFin.value;
    }

    set fechaExtension(value: string) {
        this._fechaExtension.value = value;
    }

    get fechaExtension(): string {
        return this._fechaExtension.value;
    }

// Instanciar la clase cuando se cargue la página
 //window.addEventListener('load', () => new Carta());
}