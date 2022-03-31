import { Component } from '@angular/core';

import {greatDeal} from '@myworkspace3/utilities';

@Component({
  selector: 'myworkspace3-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ionic-app';
  str = greatDeal;
}
