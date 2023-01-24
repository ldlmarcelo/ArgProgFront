import { persona } from 'src/app/model/persona.model';
import { PersonaService } from './persona.service';
import { ExperienciaLaboral } from './../model/experienciaLaboral';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExperienciaLaboralService {
  URL = 'open-elie-ldlmarcelo.koyeb.app/ExperienciaLaboral/';


  constructor(private http: HttpClient) {}

  public getExperiencialaboral(): Observable<ExperienciaLaboral[]> {
    return this.http.get<any[]>(this.URL + 'traer');
  }

  public save(experiencia: ExperienciaLaboral): Observable<any> {
    return this.http.post<any>(this.URL + 'crear', experiencia);
  }



  public update(experiencia: ExperienciaLaboral): Observable<ExperienciaLaboral> {

    return this.http.put<ExperienciaLaboral>(this.URL + `modificar`, experiencia);
  }


  public delete(id: number): Observable<any> {
    return this.http.delete<any>(this.URL + `borrar/${id}`);
  }

  public buscarExperiencia(id: number):Observable<ExperienciaLaboral>{
    return this.http.get<ExperienciaLaboral>(this.URL + `buscar/${id}`);
  }
}
