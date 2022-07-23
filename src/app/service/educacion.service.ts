import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { educacion } from '../model/educacion.model';

@Injectable({
  providedIn: 'root',
})
export class EducacionService {
  URL = 'http://localhost:8080/';
  constructor(private http: HttpClient) {}

  public obtenerEducacion(): Observable<educacion> {
    return this.http.get<educacion>(this.URL + 'educacion/traer');
  }

  public guardarEducacion(e: educacion): Observable<educacion> {
    return this.http.post<any>(this.URL + 'educacion/crear', e);
  }

  public modificarEducacion(e: educacion): Observable<educacion> {
    return this.http.put<any>(this.URL + 'educacion/editar', e);
  }

  public eliminarEducacion(id: number): Observable<educacion> {
    return this.http.delete<any>(this.URL + 'educacion/borrar/' + id);
  }
}
