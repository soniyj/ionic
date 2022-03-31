import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

import { MenuModule } from 'primeng/menu';
// import {MenuItem} from 'primeng/api';
// import {MegaMenuItem} from 'primeng/api';  //required when using MegaMenu
import {CardModule} from 'primeng/card';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    MenuModule,
    CardModule,
    DashboardRoutingModule,
  ]
})
export class DashboardModule { }
