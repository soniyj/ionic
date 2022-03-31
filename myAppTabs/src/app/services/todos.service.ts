import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { TodoModel } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private apiUrl = '';

  constructor(private http: HttpClient) { 
    this.apiUrl = environment.apiUrl;
  }

  getTodos() {
    return this.http.get<TodoModel[]>(this.apiUrl + 'todos').pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    return throwError(error);
  }

}
