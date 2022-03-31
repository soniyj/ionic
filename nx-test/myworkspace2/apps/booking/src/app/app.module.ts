import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppRoutingModule } from './app-routing.module';

import {SidebarModule} from './sidebar/sidebar.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule, 
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule, NbEvaIconsModule,
    NbSidebarModule.forRoot(),
    AppRoutingModule,
    SidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
