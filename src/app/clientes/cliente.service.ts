import { Injectable } from '@angular/core';
import { formatDate } from '@angular/common';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { catchError, map } from 'rxjs/operators';

import { Cliente, ClienteGuardar, ClienteLeer } from './cliente';

import { throwError } from 'rxjs';

import { CustomError } from '../utils/custom.error';

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
    return this.http.get<ClienteLeer[]>(this.url)
      .pipe(
        map(clientes => {
          return clientes.map(cliente =>
            ({ ...cliente, createdAt: formatDate(cliente.createdAt, 'dd/MM/yyyy', 'en_US') }));
        }),
        catchError((e: HttpErrorResponse) => throwError(() => new Error(e.error.mensaje)))
      );
  }

  crearCliente(cliente: ClienteGuardar) {
    return this.http.post<ClienteLeer>(this.url, cliente, { headers: this.headers })
      .pipe(
        catchError((e: HttpErrorResponse) => {
          const err: { datos_erroneos: string[], mensaje: string } = e.error;
          return throwError(() => new CustomError(err.mensaje, err.datos_erroneos));
        })
      );
  }

  actualizarCliente(id: number, cliente: ClienteGuardar) {
    return this.http.put<ClienteLeer>(`${this.url}/${id}`, cliente, { headers: this.headers })
      .pipe(
        catchError((e: HttpErrorResponse) => {
          const err: { datos_erroneos: string[], mensaje: string } = e.error;
          return throwError(() => new CustomError(err.mensaje, err.datos_erroneos));
        })
      );
  }

  obtenerClientePorId(id: number) {
    return this.http.get<ClienteLeer>(`${this.url}/${id}`)
      .pipe(
        catchError((e: HttpErrorResponse) =>
          throwError(() => new Error(e.error.mensaje))
        ));
  }

  eliminarCliente(id: number) {
    return this.http.delete<void>(`${this.url}/${id}`).pipe(
      catchError((e: HttpErrorResponse) => throwError(() => new Error(e.error.mensaje)))
    );
  }

}
