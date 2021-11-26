import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreerEncherePageRoutingModule } from './creer-enchere-routing.module';

import { CreerEncherePage } from './creer-enchere.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreerEncherePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CreerEncherePage]
})
export class CreerEncherePageModule {}
