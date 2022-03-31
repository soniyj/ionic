import { Component, OnInit } from '@angular/core';
import { EnumOne } from '../enum-one';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() {}

  ngOnInit() {
  }

  pressMe(x: string) {
    console.log(`${x} has been pressed`);
    alert(`${x} has been pressed`);
  }

}
