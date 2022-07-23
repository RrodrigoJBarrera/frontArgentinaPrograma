import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';
@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  URL = 'http://localhost:8080/';
  constructor(private http: HttpClient) {}

  public obtenerPersona(): Observable<persona> {
    return this.http.get<persona>(this.URL + 'persona/traer/perfil');
  }

  public guardarPersona(p: persona): Observable<persona> {
    return this.http.post<any>(this.URL + 'persona/crear', p);
  }

  public modificarPersona(p: persona): Observable<persona> {
    return this.http.put<any>(this.URL + 'persona/editar', p);
  }

  public eliminarPersona(id?: number): Observable<persona> {
    return this.http.delete<any>(this.URL + 'persona/borrar/' + id);
  }
}
