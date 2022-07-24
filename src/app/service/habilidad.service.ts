import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { habilidades } from '../model/habilidades.model';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class HabilidadService {
  URL = 'https://still-reef-69263.herokuapp.com/';
  constructor(private http: HttpClient) {}

  public obtenerHabilidad(): Observable<habilidades> {
    return this.http.get<habilidades>(
      this.URL + 'habilidad/traer',
      httpOptions
    );
  }

  public guardarHabilidad(h: habilidades): Observable<habilidades> {
    return this.http.post<any>(this.URL + 'habilidad/crear', h, httpOptions);
  }

  public modificarHabilidad(h: habilidades): Observable<habilidades> {
    return this.http.put<any>(this.URL + 'habilidad/editar', h, httpOptions);
  }

  public eliminarHabilidad(id: number): Observable<habilidades> {
    return this.http.delete<any>(this.URL + 'habilidad/borrar/' + id);
  }
}
