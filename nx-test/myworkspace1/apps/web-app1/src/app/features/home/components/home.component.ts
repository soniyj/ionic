import { Component } from '@angular/core';

import { BaseComponent } from '@myworkspace1/core';

import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'myworkspace1-home',
  templateUrl: 'home.component.html',
  providers: [NbSidebarService]
})
export class HomeComponent extends BaseComponent {}
