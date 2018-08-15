import { Routes } from '@angular/router';

import { UserResolver } from './user/user.resolver';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './not-found.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'list', component: UserComponent, resolve: { data: UserResolver } },
  { path: '**', component: PageNotFoundComponent }
];
