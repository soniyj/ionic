import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// libs
import { UISharedModule } from '@myworkspace1/features';
import { UI_COMPONENTS } from './components';

import { NbSidebarModule, NbLayoutModule, NbButtonModule } from '@nebular/theme';

const MODULES = [
  CommonModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
  UISharedModule,
  NbLayoutModule,
  NbSidebarModule, // NbSidebarModule.forRoot(), //if this is your app.module
  NbButtonModule
];

@NgModule({
  imports: [...MODULES],
  declarations: [...UI_COMPONENTS],
  exports: [...MODULES, ...UI_COMPONENTS],
})
export class UIModule {}
