import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, FormControl } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CreateNewVacancyFormComponent } from './create-new-vacancy-form/create-new-vacancy-form.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CreateNewAccountFormComponent } from './create-new-account-form/create-new-account-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateNewVacancyFormComponent,
    HomeComponent,
    LoginComponent,
    CreateNewAccountFormComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
