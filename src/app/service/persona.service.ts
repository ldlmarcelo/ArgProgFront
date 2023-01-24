import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { persona } from '../model/persona.model';


@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  URL = 'https://open-elie-ldlmarcelo.koyeb.app/persona/';
  constructor(private http: HttpClient) {}

  public getPersona(): Observable<persona> {
    return this.http.get<persona>(this.URL + 'traer/perfil');
  }

  public update(persona: persona): Observable<persona> {

    return this.http.put<persona>(this.URL + `modificar`, persona);
  }

  public buscarPersona(id: number):Observable<persona>{
    return this.http.get<persona>(this.URL + `traer/perfil/${id}`);
  }

}
