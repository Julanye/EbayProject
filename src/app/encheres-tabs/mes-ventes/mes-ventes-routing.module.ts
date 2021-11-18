import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MesVentesPage } from './mes-ventes.page';

const routes: Routes = [
  {
    path: '',
    component: MesVentesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MesVentesPageRoutingModule {}
