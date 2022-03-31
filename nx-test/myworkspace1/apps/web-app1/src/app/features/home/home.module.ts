import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { HOME_COMPONENTS, HomeComponent } from './components';

import {SidebarComponent} from '../side/components/sidebar.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [...HOME_COMPONENTS, SidebarComponent],
  exports: [...HOME_COMPONENTS],
})
export class HomeModule {}
