import { Component } from '@angular/core';

import { UsersService } from '../services/usersService';

@Component({
  selector: 'users',
  styles: [`
    .superuser {
      background-color: #eee;
    }
  `],
  template: `
    <h1>Users</h1>
    <table class="table">
      <thead>
        <tr>
          <th>id</th>
          <th>Username</th>
          <th>Roles</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let user of userslist | async" [class.superuser]="user.superuser">
          <td>{{user.id}}</td>
          <td (click)="onClick(user.username)">
            {{user.username}}
          <span *ngIf="user.superuser">(superuser)</span></td>
        </tr>
      </tbody>
    </table>
  `
})

export class UsersComponent {
  private userslist;
  constructor(users: UsersService) {
    this.userslist = users.get();
  }
}
