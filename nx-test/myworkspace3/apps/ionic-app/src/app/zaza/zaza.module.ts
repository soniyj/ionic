import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZazaPageRoutingModule } from './zaza-routing.module';

import { ZazaPage } from './zaza.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZazaPageRoutingModule
  ],
  declarations: [ZazaPage]
})
export class ZazaPageModule {}
