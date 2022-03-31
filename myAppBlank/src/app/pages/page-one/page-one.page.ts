import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { PageTwoPage } from '../page-two/page-two.page';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.page.html',
  styleUrls: ['./page-one.page.scss'],
})
export class PageOnePage implements OnInit {

  items: any[] = [];
  rotateImg = 0;

  constructor(private menu: MenuController, private modalController: ModalController) { }

  ngOnInit() {
    const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

    const images = [
      'bandit',
      'batmobile',
      'blues-brothers',
      'bueller',
      'delorean',
      'eleanor',
      'general-lee',
      'ghostbusters',
      'knight-rider',
      'mirth-mobile'
    ];

    for (let i = 0; i < 1000; i++) {
      this.items.push({
        name: i + ' - ' + images[this.rotateImg],
        imgSrc: this.getImgSrc(images),
        avatarSrc: this.getImgSrc(images),
        imgHeight: Math.floor(Math.random() * 50 + 150),
        content: lorem.substring(0, Math.random() * (lorem.length - 100) + 100)
      });

      this.rotateImg++;
      if (this.rotateImg === images.length) {
        this.rotateImg = 0;
      }
    }
  }

  getImgSrc(images) {
    const src = `https://dummyimage.com/600x400/${Math.round(Math.random() * 99999)}/fff.png`;
    this.rotateImg++;
    if (this.rotateImg === images.length) {
      this.rotateImg = 0;
    }
    return src;
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: PageTwoPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'firstName': 'Marco',
        'lastName': 'Mata',
        'middleInitial': 'boh'
      }
    });
    /*return*/ await modal.present();
    const { data } = await modal.onWillDismiss();
    console.log(`presentModal ${data['values']}`);
  }

}
