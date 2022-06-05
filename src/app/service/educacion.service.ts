import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { educacion } from '../model/educacion.model'

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  URL = "http://localhost:8080/"
  constructor(private http: HttpClient) { }

  public getEducaction(): Observable<educacion> {
    return this.http.get<educacion>(this.URL + 'educacion/traer')
  }
}
