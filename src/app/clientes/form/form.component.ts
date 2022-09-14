import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Cliente } from '../cliente';

import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: [
  ]
})
export class FormComponent implements OnInit {

  public cliente: Cliente = new Cliente(-1, '', '', '');

  constructor(private cs: ClienteService) { }

  ngOnInit(): void {
  }

  onSubmit(formulario: NgForm): void {
    if (formulario.invalid) {
      Object.values(formulario.controls).forEach(control => control.markAsTouched());
      return;
    }
    console.info(formulario.value, this.cliente);
  }

}
