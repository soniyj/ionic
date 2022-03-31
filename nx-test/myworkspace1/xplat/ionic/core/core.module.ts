import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { throwIfAlreadyLoaded } from '@myworkspace1/utils';
import { Myworkspace1CoreModule } from '@myworkspace1/web';

@NgModule({
  imports: [Myworkspace1CoreModule, IonicModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
})
export class Myworkspace1IonicCoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: Myworkspace1IonicCoreModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'Myworkspace1IonicCoreModule');
  }
}
