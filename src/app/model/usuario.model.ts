export class Usuario {
  id?: number;
  usuario: String;
  password: String;
  login: number;

  constructor(usuario: String, password: String, login: number) {
    this.usuario = usuario;
    this.password = password;
    this.login = login;
  }
}
