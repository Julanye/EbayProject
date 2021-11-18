import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MesVentesPageRoutingModule } from './mes-ventes-routing.module';

import { MesVentesPage } from './mes-ventes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MesVentesPageRoutingModule
  ],
  declarations: [MesVentesPage]
})
export class MesVentesPageModule {}
