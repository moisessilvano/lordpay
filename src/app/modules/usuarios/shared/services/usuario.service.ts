import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario.model';
import { environment } from '../../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<Usuario[]> {
  	return this.http.get<any>(`${environment.apiUrl}api/usuarios`);
  }

  getUsuario(usuarioId: string): Observable<Usuario> {
  	return this.http.get<any>(`${environment.apiUrl}api/usuarios/${usuarioId}`);
  }

  createUsuario(usuario: Usuario) {
  	return this.http.post<any>(`${environment.apiUrl}api/usuario`, usuario);
  }

  updateUsuario(usuarioId: string, usuario: Usuario) {
  	return this.http.put<any>(`${environment.apiUrl}api/usuarios/${usuarioId}`, usuario);
  }

  deleteUsuario(usuarioId: string) {
  	return this.http.delete<any>(`${environment.apiUrl}api/usuarios/${usuarioId}`);
  }

}