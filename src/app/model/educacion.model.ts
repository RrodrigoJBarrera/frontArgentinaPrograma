export class educacion {
  id: number;
  institucion: String;
  titulo: String;
  anio_inicio: String;
  anio_finalizacion: String;
  persona: String;

  constructor(
    id: number,
    institucion: String,
    titulo: String,
    anio_inicio: String,
    anio_finalizacion: String,
    persona: String
  ) {
    this.id = id;
    this.institucion = institucion;
    this.titulo = titulo;
    this.anio_inicio = anio_inicio;
    this.anio_finalizacion = anio_finalizacion;
    this.persona = persona;
  }
}
