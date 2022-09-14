import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormComponent } from './clientes/form/form.component';
import { ClientesComponent } from './clientes/list/clientes.component';

const routes: Routes = [
  {
    path: 'list',
    component: ClientesComponent,
  },
  {
    path: 'form',
    component: FormComponent,
  },
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
