import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './not-found.component';
import { UserResolver } from './user/user.resolver';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent/*, canActivate: [AuthGuard] */},
  { path: 'register', component: RegisterComponent/*, canActivate: [AuthGuard] */},
  { path: 'list', component: UserComponent, resolve: { data: UserResolver } },
  { path: '**', component: PageNotFoundComponent }
];
