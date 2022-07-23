import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { experiencia } from '../model/experiencia.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ExperienciaService {
  URL = 'https://still-reef-69263.herokuapp.com/';
  constructor(private http: HttpClient) {}

  public obtenerExperiencia(): Observable<experiencia> {
    return this.http.get<experiencia>(this.URL + 'experiencia/traer');
  }

  public guardarExperiencia(e: experiencia): Observable<experiencia> {
    return this.http.post<any>(this.URL + 'experiencia/crear', e);
  }

  public modificarExperiencia(e: experiencia): Observable<experiencia> {
    return this.http.put<any>(this.URL + 'experiencia/editar', e);
  }

  public eliminarExperiencia(id: number): Observable<experiencia> {
    return this.http.delete<any>(this.URL + 'experiencia/borrar/' + id);
  }
}
