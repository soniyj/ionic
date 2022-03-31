import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';

import { NbLayoutModule, NbSidebarModule } from '@nebular/theme';

@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    NbLayoutModule,
    NbSidebarModule
  ],
  exports: [SidebarComponent]
})
export class SidebarModule { }
