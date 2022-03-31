import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';
import { MegaMenuItem } from 'primeng/api';  //required when using MegaMenu

@Component({
  selector: 'myworkspace3-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  items: MenuItem[];

  sidebarActive = true;

  constructor() { }

  ngOnInit(): void {
    this.items = [{
      label: 'File',
      items: [
        { label: 'New', icon: 'pi pi-plus' },
        { label: 'Open', icon: 'pi pi-download' }
      ]
    },
    {
      label: 'Edit',
      items: [
        { label: 'Undo', icon: 'pi pi-refresh' },
        { label: 'Redo', icon: 'pi pi-repeat' }
      ]
    }];
  }

}
