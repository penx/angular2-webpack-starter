import { Component } from '@angular/core';

import { UsersService } from '../services/usersService';

@Component({
  selector: 'contact',
   styles: [`
    .ng-valid[required] { border: 2px solid #42A948; /* green */ }
    .ng-invalid { border: 2px solid #a94442; /* red */ }
    .alert { color: #a94442; /* red */ }
  `],
  template: `
    <h1>Contact</h1>
    <form #f="ngForm" (ngSubmit)="onSubmit(f.form.value)">
      <input type="email"
        #email="ngModel"
        [(ngModel)]="model.email"
        name=”email”
        required>
      <div [hidden]="email.valid || email.pristine" class="alert alert-danger">Email is required</div>
      <button type="submit" [disabled]="!f.form.valid">Submit</button>
    </form>`
})
export class Contact {
  model = {};
  constructor() {
  }
}
