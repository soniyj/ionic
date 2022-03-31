import { Component } from '@angular/core';
import { NgRomeService } from './ngrome.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  private toShow: boolean = false;
  private myModel: string = '';
  private myName: string = '';

  constructor(private ngrome: NgRomeService) {
    
  }

  pressed() {
    this.ngrome.setString(this.myModel);
    console.log(this.ngrome.getString());
    if (this.myModel.length > 0) {
      this.toShow = true;
      this.myName = 'You are ' + this.ngrome.getString();
    }
  }

}
