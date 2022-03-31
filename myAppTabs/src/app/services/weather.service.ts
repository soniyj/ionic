import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { WeatherModel } from '../models/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  // https://api.openweathermap.org/data/2.5/weather?appid=868e126e2c0eda7df24d1fb7883f1e86&q=London
  private apiUrl = '';

  constructor(private http: HttpClient) {
    this.apiUrl = 'https://api.openweathermap.org/data/2.5/weather?appid=868e126e2c0eda7df24d1fb7883f1e86&q=London';
  }

  getWeather() {
    return this.http.get<WeatherModel>(this.apiUrl).pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    return throwError(error);
  }

}