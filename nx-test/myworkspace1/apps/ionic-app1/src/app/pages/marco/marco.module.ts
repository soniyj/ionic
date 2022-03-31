import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarcoPageRoutingModule } from './marco-routing.module';

import { MarcoPage } from './marco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarcoPageRoutingModule
  ],
  declarations: [MarcoPage]
})
export class MarcoPageModule {}
