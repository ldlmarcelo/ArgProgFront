import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { softskill } from '../model/softskill';

@Injectable({
  providedIn: 'root'
})

export class SoftskillService {
  URL = 'https://argprogback1.herokuapp.com/softskill/';

  constructor(private http: HttpClient) {

  }

  public getSoftskill(): Observable<softskill[]> {
    return this.http.get<any[]>(this.URL + 'traer');
  }

  public save(softskill: softskill): Observable<any> {
    return this.http.post<any>(this.URL + 'crear', softskill);
  }



  public update(softskill: softskill): Observable<softskill> {

    return this.http.put<softskill>(this.URL + `modificar`, softskill);
  }


  public delete(id: number): Observable<any> {
    return this.http.delete<softskill>(this.URL + `borrar/${id}`);
  }

  public buscarSoftskill(id: number):Observable<softskill>{
    return this.http.get<softskill>(this.URL + `buscar/${id}`);
  }
}
