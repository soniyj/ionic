import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.page.html',
  styleUrls: ['./page-two.page.scss'],
})
export class PageTwoPage implements OnInit {

  // Data passed in by componentProps
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() middleInitial: string;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true,
      'values': 'test'
    });
  }

}
