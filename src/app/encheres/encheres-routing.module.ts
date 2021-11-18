import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EncheresPage } from './encheres.page';

const routes: Routes = [
  {
    path: '',
    component: EncheresPage
  },
  {
    path: 'mes-achats',
    loadChildren: () => import('../encheres-tabs/mes-achats/mes-achats.module').then(m => m.MesAchatsPageModule)
  },
  {
    path: 'mes-ventes',
    loadChildren: () => import('../encheres-tabs/mes-ventes/mes-ventes.module').then(m => m.MesVentesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EncheresPageRoutingModule {}
