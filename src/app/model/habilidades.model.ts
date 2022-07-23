export class habilidades {
  id: number;
  descripcion: String;
  persona: String;

  constructor(id: number, desc: String, persona: String, img: String) {
    this.id = id;
    this.descripcion = desc;
    this.persona = persona;
  }
}
