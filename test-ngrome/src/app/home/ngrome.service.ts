import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgRomeService {

  private _test: string;

  constructor() { }

  setString(t) {
    this._test = t;
  }

  getString(): string {
    return this._test;
  };

}
