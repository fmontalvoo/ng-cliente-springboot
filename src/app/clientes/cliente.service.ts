import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Cliente } from './cliente';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private url = `${environment.api_url}/clientes`;

  constructor(private http: HttpClient) { }



  obtenerClientes() {
    return this.http.get<Cliente[]>(this.url);
  }
}
