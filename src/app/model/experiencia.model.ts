export class experiencia {
  id: number;
  tipo_trabajo: String;
  lugar: String;
  descripcion: String;
  puesto: String;
  anio_inicio: String;
  anio_finalizacion: String;
  persona: String;

  constructor(
    id: number,
    tipoT: String,
    lug: String,
    desc: String,
    pue: String,
    ai: String,
    af: String,
    ip: String
  ) {
    this.id = id;
    this.tipo_trabajo = tipoT;
    this.lugar = lug;
    this.descripcion = desc;
    this.puesto = pue;
    this.anio_inicio = ai;
    this.anio_finalizacion = af;
    this.persona = ip;
  }
}
