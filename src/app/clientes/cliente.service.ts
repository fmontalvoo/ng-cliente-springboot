import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Cliente, ClienteGuardar, ClienteLeer } from './cliente';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private url = `${environment.api_url}/clientes`;
  private headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) { }

  obtenerClientes() {
    return this.http.get<ClienteLeer[]>(this.url);
  }

  crearCliente(cliente: ClienteGuardar) {
    return this.http.post<ClienteLeer>(this.url, cliente, { headers: this.headers });
  }

  actualizarCliente(id: number, cliente: ClienteGuardar) {
    return this.http.put<ClienteLeer>(`${this.url}/${id}`, cliente, { headers: this.headers });
  }

  obtenerClientePorId(id: number) {
    return this.http.get<ClienteLeer>(`${this.url}/${id}`);
  }

  eliminarCliente(id: number) {
    return this.http.delete<void>(`${this.url}/${id}`);
  }

}
