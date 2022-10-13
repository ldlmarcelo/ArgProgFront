import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { hardskill } from '../model/hardskill';


@Injectable({
  providedIn: 'root'
})
export class HardskillService {
  URL = 'https://argprogback1.herokuapp.com/hardskill/';

  constructor(private http: HttpClient) {

  }

  public getHardskill(): Observable<hardskill[]> {
    return this.http.get<any[]>(this.URL + 'traer');
  }

  public save(hardskill: hardskill): Observable<any> {
    return this.http.post<any>(this.URL + 'crear', hardskill);
  }



  public update(hardskill: hardskill): Observable<hardskill> {

    return this.http.put<hardskill>(this.URL + `modificar`, hardskill);
  }


  public delete(id: number): Observable<any> {
    return this.http.delete<hardskill>(this.URL + `borrar/${id}`);
  }

  public buscarHardskill(id: number):Observable<hardskill>{
    return this.http.get<hardskill>(this.URL + `buscar/${id}`);
  }
}
