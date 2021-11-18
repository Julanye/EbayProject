import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MesEncheresPage } from './mes-encheres.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: MesEncheresPage,
    children:[
      {
        path:'mes-ventes',
        children: [
          {
            path:'',
            loadChildren: () => import('../encheres-tabs/mes-ventes/mes-ventes.module').then(m => m.MesVentesPageModule)
          }
        ]
      },
      {
        path:'mes-achats',
        children: [
          {
            path:'',
            loadChildren: () => import('../encheres-tabs/mes-achats/mes-achats.module').then(m => m.MesAchatsPageModule)
          }
        ]
      },
      {
        path:'',
        redirectTo:'tabs/mes-ventes',
        pathMatch:'full'
      }
    ]
  },
  {
    path:'',
    redirectTo:'tabs/mes-achats',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MesEncheresPageRoutingModule {}
