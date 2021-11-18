import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreerEncherePageRoutingModule } from './creer-enchere-routing.module';

import { CreerEncherePage } from './creer-enchere.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreerEncherePageRoutingModule
  ],
  declarations: [CreerEncherePage]
})
export class CreerEncherePageModule {}
