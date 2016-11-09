import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { UsersComponent } from './users';
import { Wikipedia } from './wikipedia';
import { Contact } from './contact';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'users', component: UsersComponent },
  { path: 'wikipedia', component: Wikipedia },
  { path: 'contact', component: Contact },
  {
    path: 'detail', loadChildren: () => System.import('./+detail').then((comp: any) => {
      return comp.default;
    })
    ,
  },
  { path: '**',    component: NoContentComponent },
];
