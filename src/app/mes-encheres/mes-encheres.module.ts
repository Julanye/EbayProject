import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MesEncheresPageRoutingModule } from './mes-encheres-routing.module';

import { MesEncheresPage } from './mes-encheres.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MesEncheresPageRoutingModule
  ],
  declarations: [MesEncheresPage]
})
export class MesEncheresPageModule {}
