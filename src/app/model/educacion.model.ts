export class educacion {
    id?: number;
    institucion: String;
    titulo: String;
    anio_inicio: String;
    anio_finalizacion: String;
    id_persona: String;

    constructor(institucion: String, titulo: String, anio_inicio: String, anio_finalizacion: String, id_persona: String) {

        this.institucion = institucion;
        this.titulo = titulo;
        this.anio_inicio = anio_inicio;
        this.anio_finalizacion = anio_finalizacion;
        this.id_persona = id_persona;
    }
}
