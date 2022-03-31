import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { SIDEBAR_COMPONENTS, SidebarComponent } from './components';

export const routes: Routes = [
  {
    path: '',
    component: SidebarComponent,
  },
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [...SIDEBAR_COMPONENTS],
  exports: [...SIDEBAR_COMPONENTS],
})
export class SideModule {}