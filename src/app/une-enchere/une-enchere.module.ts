import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UneEncherePageRoutingModule } from './une-enchere-routing.module';

import { UneEncherePage } from './une-enchere.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UneEncherePageRoutingModule
  ],
  declarations: [UneEncherePage]
})
export class UneEncherePageModule {}
