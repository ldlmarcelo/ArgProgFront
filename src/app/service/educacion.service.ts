import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root',
})
export class EducacionService {
  URL = 'https://open-elie-ldlmarcelo.koyeb.app/Educacion/';

  constructor(private http: HttpClient) {}

  public getEducacion(): Observable<Educacion[]> {
    return this.http.get<any[]>(this.URL + 'traer');
  }

  public save(educacion: Educacion): Observable<any> {
    return this.http.post<any>(this.URL + 'crear', educacion);
  }



  public update(educacion: Educacion): Observable<Educacion> {

    return this.http.put<Educacion>(this.URL + `modificar`, educacion);
  }


  public delete(id: number): Observable<any> {
    return this.http.delete<Educacion>(this.URL + `borrar/${id}`);
  }

  public buscarEducacion(id: number):Observable<Educacion>{
    return this.http.get<Educacion>(this.URL + `buscar/${id}`);
  }
}
