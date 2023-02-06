import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuarios } from '../models/Usuarios';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  myAppUrl = 'https://localhost:44388/';
  myApiUrl = 'api/usuarios/';

  constructor(private http: HttpClient) {}

  registrarUsuario(Usuario: Usuarios): Observable<Usuarios> {
    return this.http.post<Usuarios>(this.myAppUrl + this.myApiUrl, Usuario);
  }
}
