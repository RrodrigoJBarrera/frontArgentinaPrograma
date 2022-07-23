import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { educacion } from '../model/educacion.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class EducacionService {
  URL = 'https://still-reef-69263.herokuapp.com/';
  constructor(private http: HttpClient) {}

  public obtenerEducacion(): Observable<educacion> {
    return this.http.get<educacion>(this.URL + 'educacion/traer', httpOptions);
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
