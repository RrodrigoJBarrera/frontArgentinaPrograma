import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { experiencia } from '../model/experiencia.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ExperienciaService {
  URL = 'https://still-reef-69263.herokuapp.com/';
  constructor(private http: HttpClient) {}

  public obtenerExperiencia(): Observable<experiencia> {
    return this.http.get<experiencia>(
      this.URL + 'experiencia/traer',
      httpOptions
    );
  }

  public guardarExperiencia(e: experiencia): Observable<experiencia> {
    return this.http.post<any>(this.URL + 'experiencia/crear', e, httpOptions);
  }

  public modificarExperiencia(e: experiencia): Observable<experiencia> {
    return this.http.put<any>(this.URL + 'experiencia/editar', e, httpOptions);
  }

  public eliminarExperiencia(id: number): Observable<experiencia> {
    return this.http.delete<any>(this.URL + 'experiencia/borrar/' + id);
  }
}
