import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MesAchatsPageRoutingModule } from './mes-achats-routing.module';

import { MesAchatsPage } from './mes-achats.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MesAchatsPageRoutingModule
  ],
  declarations: [MesAchatsPage]
})
export class MesAchatsPageModule {}
