import { ExperienciaLaboral } from './../model/experienciaLaboral';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class ExperienciaLaboralService{
  URL = 'http://localhost:8080/ExperienciaLaboral/';
  constructor(private http: HttpClient) {}

  public getExperiencialaboral(): Observable<ExperienciaLaboral[]> {
    return this.http.get<ExperienciaLaboral[]>(this.URL+'traer');
  }

  public save(experiencia: ExperienciaLaboral): Observable<any>{
    return this.http.post<any>(this.URL + 'crear', experiencia);
  }

  public update(id: number, experiencia: ExperienciaLaboral): Observable<any>{
    return this.http.put<any>(this.URL + `editar/${id}`, experiencia);
  }

  public delete(id: number): Observable<any>{
    return this.http.delete<any>(this.URL + `borrar/${id}`);
  }
}
