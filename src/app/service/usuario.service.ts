import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/usuario.model';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  URL = 'https://still-reef-69263.herokuapp.com/';
  constructor(private http: HttpClient) {}

  public obtenerUsuario(): Observable<Usuario> {
    return this.http.get<Usuario>(this.URL + 'usuario/traer');
  }

  public guardarUsuario(u: Usuario): Observable<Usuario> {
    return this.http.put<any>(this.URL + 'usuario/editar', u);
  }
}
