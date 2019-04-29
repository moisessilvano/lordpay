import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../models/cliente.model';
import { environment } from '../../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  getClientes(): Observable<Cliente[]> {
  	return this.http.get<any>(`${environment.apiUrl}api/clientes`);
  }

  getCliente(clienteId: string): Observable<Cliente> {
  	return this.http.get<any>(`${environment.apiUrl}api/clientes/${clienteId}`);
  }

  createCliente(cliente: Cliente) {
  	return this.http.post<any>(`${environment.apiUrl}api/clientes`, cliente);
  }

  updateCliente(clienteId: string, cliente: Cliente) {
  	return this.http.put<any>(`${environment.apiUrl}api/clientes/${clienteId}`, cliente);
  }

  deleteCliente(clienteId: string) {
  	return this.http.delete<any>(`${environment.apiUrl}api/clientes/${clienteId}`);
  }

}
