import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Cliente, ClienteGuardar } from '../cliente';

import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: [
  ]
})
export class FormComponent implements OnInit {

  public cliente: ClienteGuardar = {
    nombre: '',
    apellido: '',
    email: ''
  };

  private id: number | null = null;

  constructor(
    private cs: ClienteService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id') ?? '-1');
    if (this.id != -1) {
      this.cs.obtenerClientePorId(this.id)
        .subscribe({
          next: cli => this.cliente = cli,
          error: e => alert(e),
          complete: () => console.log('Completado')
        });
    }
  }

  onSubmit(formulario: NgForm): void {
    if (formulario.invalid) {
      Object.values(formulario.controls).forEach(control => control.markAsTouched());
      return;
    }

    console.info(formulario.value, this.cliente);

    if (this.id != -1) {
      this.cs.actualizarCliente(this.id!, this.cliente)
        .subscribe({
          next: cli => {
            alert(`El cliente: ${cli.nombre} ${cli.apellido} se edito correctamente`);
            location.href = '/';
            // formulario.resetForm();
          },
          error: e => alert(`${e.message}\n\n${e.stack}`),
          complete: () => console.log('Completado')
        });
    } else {
      this.cs.crearCliente(this.cliente)
        .subscribe({
          next: cli => {
            alert(`El cliente: ${cli.nombre} ${cli.apellido} se creo correctamente`);
            location.href = '/';
            // formulario.resetForm();
          },
          error: e => alert(`${e.message}\n\n${e.stack}`),
          complete: () => console.log('Completado')
        });
    }
  }

}
