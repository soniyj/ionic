import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Plugins, StatusBarStyle } from '@capacitor/core';
const { StatusBar } = Plugins;
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar as NgxStatusBar } from '@ionic-native/status-bar/ngx';

import { greatLib } from '@myworkspace1/utilities/src/';

import {Service1Service} from '../../../../libs/core/services/service1.service';
import {Service2Service} from '@myworkspace1/lib/service2.service';

@Component({
  selector: 'myworkspace1-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {

  str = greatLib;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: NgxStatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      if (this.platform.is('capacitor')) {
        StatusBar.setStyle({
          style: StatusBarStyle.Dark,
        });
      } else {
        this.statusBar.styleDefault();
        this.splashScreen.hide();
      }
    });
  }
}
