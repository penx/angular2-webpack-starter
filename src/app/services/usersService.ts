import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class UsersService {
  private _users; //class property

  constructor(private http: Http) {
    this.http = http;
  }
  get() {
    return this.http.get('/assets/users.json')
      .map(response => response.json().users);
  }
}
