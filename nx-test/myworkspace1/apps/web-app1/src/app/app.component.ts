import { Component } from '@angular/core';

// xplat
import { AppBaseComponent } from '@myworkspace1/web';

import { greatLib } from '@myworkspace1/utilities';

import {Service1Service} from 'libs/core/services/service1.service';
import {Service2Service} from '@myworkspace1/lib/service2.service';

@Component({
  selector: 'myworkspace1-root',
  templateUrl: './app.component.html',
})
export class AppComponent extends AppBaseComponent {

  str = greatLib;
  
  constructor() {
    super();
  }
}
