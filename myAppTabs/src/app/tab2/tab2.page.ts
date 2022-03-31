import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { UsersService } from '../services/users.service';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  item: string = '';
  items: string[] = [];

  users = [];

  imgSrc = '';

  constructor(private alertController: AlertController, private usersService: UsersService) {}

  ngOnInit() {
    this.usersService.getUsers().subscribe(
      (data) => {
        console.log('ngOnInit', data);
        this.users = data;
      },
      (error) => console.error('ngOnInit', error),
      () => console.log('ngOnInit', 'completed')
    );
  }

  details(idx: number) {
    console.log(idx);
  }

  addItem() {
    console.log('addItem', this.item);
    if (this.item.length > 0) {
      this.items.push(this.item);
      this.item = '';
    }
  }

  deleteItem(idx: number) {
    this.presentAlertConfirm(idx);
  }

  updateItem(idx: number) {
    this.presentAlertPrompt(idx);
  }

  async presentAlertConfirm(idx: number) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm Delete',
      message: '<strong>Do you wish to Continue?</strong>!!!',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Yes',
          handler: () => {
            console.log('Confirm Okay');
            if (idx > -1) {
              this.items.splice(idx, 1);
            }
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertPrompt(idx: number) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Update Item',
      inputs : [
        {
          name: 'name1',
          type: 'text',
          placeholder: this.items[idx]
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            console.log('Prompt Confirm Ok', data);
            if (data) {
              if (idx > -1) {
                this.items[idx] = data['name1'];
              }
            }
          }
        }
      ]
    });

    await alert.present();
  }

  async takePicture () {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });
  
    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    let imageUrl = image.webPath;
  
    // Can be set to the src of an image now
    // imageElement.src = imageUrl;
    this.imgSrc = imageUrl;

    console.log('uri', imageUrl);
  };

}
