import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UneEncherePage } from './une-enchere.page';

const routes: Routes = [
  {
    path: '',
    component: UneEncherePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UneEncherePageRoutingModule {}
