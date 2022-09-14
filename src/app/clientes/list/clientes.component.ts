import { Component, OnInit } from '@angular/core';

import { Cliente } from '../cliente';

import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styles: [
  ]
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [];

  constructor(private cs: ClienteService) { }

  ngOnInit(): void {
    this.obtenerClientes();
  }

  obtenerClientes() {
    this.cs.obtenerClientes()
      .subscribe({
        next: clientes => this.clientes = clientes,
        error: e => alert(e),
        complete: () => console.log('Completado')
      });
  }

  eliminar(cliente: Cliente) {
    if (confirm(`¿Esta seguro de eliminar a : ${cliente.nombre} ${cliente.apellido}}?`)) {
      this.cs.eliminarCliente(cliente.id)
        .subscribe({
          next: () => {
            alert(`El cliente: ${cliente.nombre} ${cliente.apellido} fue eliminado.`);
            this.obtenerClientes();
          },
          error: e => alert(e),
          complete: () => console.log('Completado')
        });
    }

  }

}
