import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { RegisterProductComponent } from './products/register/register.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { PageNotFoundComponent } from './not-found.component';
import { ButtonModule } from './button/button.module';
import { UserResolver } from './user/user.resolver';

@NgModule({
  declarations: [
    AppComponent,
    RegisterProductComponent,
    RegisterComponent,
    LoginComponent,
    UserComponent,
    PageNotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(rootRouterConfig, { useHash: false }),
    BrowserModule,
    CommonModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ProductsModule,
    ButtonModule
  ],
  providers: [UserResolver],
  bootstrap: [AppComponent]
})

export class AppModule {}
