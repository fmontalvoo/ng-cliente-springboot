import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormComponent } from './clientes/form/form.component';
import { ClientesComponent } from './clientes/list/clientes.component';

const routes: Routes = [
  {
    path: 'clientes',
    component: ClientesComponent,
  },
  {
    path: 'crear',
    component: FormComponent,
  },
  {
    path: 'editar/:id',
    component: FormComponent,
  },
  {
    path: '',
    redirectTo: 'clientes',
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
