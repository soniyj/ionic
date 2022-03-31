import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryComponent } from './history.component';
import { NbCardModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';

@NgModule({
  declarations: [HistoryComponent],
  imports: [
    CommonModule,
    NbCardModule,
    ThemeModule
  ]
})
export class HistoryModule { }
