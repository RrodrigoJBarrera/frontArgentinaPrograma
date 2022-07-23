import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { habilidades } from '../model/habilidades.model';

@Injectable({
  providedIn: 'root',
})
export class HabilidadService {
  URL = 'http://localhost:8080/';
  constructor(private http: HttpClient) {}

  public obtenerHabilidad(): Observable<habilidades> {
    return this.http.get<habilidades>(this.URL + 'habilidad/traer');
  }

  public guardarHabilidad(h: habilidades): Observable<habilidades> {
    return this.http.post<any>(this.URL + 'habilidad/crear', h);
  }

  public modificarHabilidad(h: habilidades): Observable<habilidades> {
    return this.http.put<any>(this.URL + 'habilidad/editar', h);
  }

  public eliminarHabilidad(id: number): Observable<habilidades> {
    return this.http.delete<any>(this.URL + 'habilidad/borrar/' + id);
  }
}
