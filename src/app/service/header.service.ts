import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { header } from '../model/header.model';


@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  URL = 'open-elie-ldlmarcelo.koyeb.app/persona/';
  constructor(private http: HttpClient) {}

  public getHeader(): Observable<header> {
    return this.http.get<header>(this.URL+'traer/perfil');
  }
}
