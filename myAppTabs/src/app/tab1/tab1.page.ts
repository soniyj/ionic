import { Component, OnInit } from '@angular/core';
import { PostModel, WeatherModel } from '../models';
import { PostsService, WeatherService } from '../services/';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  posts: PostModel[] = [];

  weather: WeatherModel = {} as WeatherModel;

  constructor(private postsServices: PostsService, private weatherService: WeatherService) {}

  ngOnInit() {
    this.postsServices.getPosts().subscribe(
      (data) => {
        console.log('ngOnInit', data);
        this.posts = data;
      },
      (error) => console.error('ngOnInit', error),
      () => console.log('ngOnInit', 'completed')
    );

    this.weatherService.getWeather().subscribe(
      data => {
        this.weather = data;
        console.log('weather', this.weather);
      },
      error => console.error(error)
    );
  }

  details(idx: number) {
    console.log(idx);
  }

}
