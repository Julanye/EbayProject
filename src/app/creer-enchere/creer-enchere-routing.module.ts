import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreerEncherePage } from './creer-enchere.page';

const routes: Routes = [
  {
    path: '',
    component: CreerEncherePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreerEncherePageRoutingModule {}
