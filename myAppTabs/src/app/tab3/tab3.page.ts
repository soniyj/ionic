import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { TodosService } from '../services/todos.service';
import { TodoModel } from '../models/todo';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  array = [];

  profileForm = this.fb.group({
    firstName: ['', Validators.minLength(3)],
    lastName: ['', Validators.maxLength(5)],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
  });

  todos: TodoModel[] = [];
  todosBackup: TodoModel[] = [];

  searchBarText = '';

  // private loading: HTMLIonLoadingElement;

  constructor(private fb: FormBuilder,
              private todosService: TodosService,
              private loadingController: LoadingController
              ) {}

  async ngOnInit() {
    let t = await this.presentLoading();
    await t.present();

    this.todosService.getTodos().subscribe(
      (data) => {
        console.log('ngOnInit', data);
        this.todos = data;
        // this.todosBackup = Object.assign([], data);
        this.todosBackup = data;
        t.dismiss();
      },
      (error) => {
        console.error('ngOnInit', error);
        t.dismiss();
      },
      () => console.log('ngOnInit', 'completed')
    )
  }

  details(idx: number) {
    console.log(this.todos[idx]);
  }

  onSubmit() {
    console.log(this.profileForm.valid);
    console.log(this.profileForm.value['firstName']);

    const tmp = Object.assign({}, this.profileForm.value);

    this.array.push(tmp);

    console.log(this.array);

    this.profileForm.value['firstName'] = 'changeme';

    console.log(this.array);
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      // duration: 2000
    });
    // await loading.present();

    return loading;

    // const { role, data } = await loading.onDidDismiss();
    // console.log('Loading dismissed!');
  }

  searchBarIonChange(event: Event) {
    console.log('searchBarIonChange', event);
    this.todos = this.todosBackup;

    if (!this.searchBarText) {
      return;
    }

    this.todos = this.todos.filter(currentTodo => {
      if (currentTodo.title && this.searchBarText) {
        return (currentTodo.title.toLowerCase().indexOf(this.searchBarText.toLowerCase()) > -1);
      }
    });
  }

  searchBarIonInput(event: Event) {
    console.log('searchBarIonInput', event);
  }

  highlight(content: string) {
    if(!this.searchBarText) {
        return content;
    }
    
    return content.replace(new RegExp(this.searchBarText, "gi"), match => {
      // return '<span class="highlightText">' + match + '</span>';
      return '<span style="background-color: yellow; !important">' + match + '</span>';
      // return '<ion-text color="warning">' + match + '</ion-text>';
    });
  }

}
