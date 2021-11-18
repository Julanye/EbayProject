import {Component, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonicModule, MenuController} from '@ionic/angular';
import { EncheresPageRoutingModule } from './encheres-routing.module';
import { EncheresPage } from './encheres.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EncheresPageRoutingModule,
  ],
  declarations: [EncheresPage]
})

export class EncheresPageModule {
  constructor() { }
}
