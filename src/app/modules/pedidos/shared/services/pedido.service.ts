import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pedido } from '../models/pedido.model';
import { environment } from '../../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private http: HttpClient) { }

  newPedido(pedido: Pedido) {
    return this.http.post<any>(`${environment.apiUrl}api/pedidos`, pedido);
  }

  getPedidos(params): Observable<Pedido[]> {
    return this.http.get<any>(`${environment.apiUrl}api/pedidos`, { params: params });
  }

  getPedido(pedidoId: string): Observable<Pedido[]> {
    return this.http.get<any>(`${environment.apiUrl}api/pedidos/${pedidoId}`);
  }

  updateStatusPedido(pedidoId: string, status: number) {
    return this.http.put<any>(`${environment.apiUrl}api/pedidos/updateStatusPedido/${pedidoId}`, { status: status });
  }

  getPedidosByCliente(clienteId: string, params): Observable<Pedido[]> {
    return this.http.get<any>(`${environment.apiUrl}api/pedidos/getPedidosByCliente/${clienteId}`, { params: params });
  }

  getPedidosByData(data: string, params): Observable<Pedido[]> {
    return this.http.get<any>(`${environment.apiUrl}api/pedidos/getPedidosByData/${data}`, { params: params });
  }


}
