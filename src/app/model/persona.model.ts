export class persona {
    id?: number;
    nombre: String;
    apellido: String;
    direccion: String;
    email: String;
    telefono: String;
    profesion: String;
    sobremi: String;
    github: String;
    linkedin: String;

    constructor(nombre: String, apellido: String, direccion: String, email: String,
        telefono: String, profesion: String, sobremi: String, github: String,
        linkedin: String) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.email = email;
        this.telefono = telefono;
        this.profesion = profesion;
        this.sobremi = sobremi;
        this.github = github;
        this.linkedin = linkedin;
    }
}
