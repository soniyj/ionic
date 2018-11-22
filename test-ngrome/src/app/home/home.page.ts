import { Component } from '@angular/core';
import { NgRomeService } from './ngrome.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  private my_model: string = '';

  constructor(private ngrome: NgRomeService) {
    
  }

  pressed() {
    this.ngrome.setString(this.my_model);
    console.log(this.ngrome.getString());
    this.my_model = 'You are ' + this.my_model;
  }

}
