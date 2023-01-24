import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { proyecto } from '../model/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  URL = 'open-elie-ldlmarcelo.koyeb.app/proyecto/';

  constructor(private http: HttpClient) {

  }
  public getProyecto(): Observable<proyecto[]> {
    return this.http.get<any[]>(this.URL + 'traer');
  }

  public save(proyecto: proyecto): Observable<any> {
    return this.http.post<any>(this.URL + 'crear', proyecto);
  }



  public update(proyecto: proyecto): Observable<proyecto> {

    return this.http.put<proyecto>(this.URL + `modificar`, proyecto);
  }


  public delete(id: number): Observable<any> {
    return this.http.delete<proyecto>(this.URL + `borrar/${id}`);
  }

  public buscarProyecto(id: number):Observable<proyecto>{
    return this.http.get<proyecto>(this.URL + `buscar/${id}`);
  }
}
