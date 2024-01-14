import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './header/home/home.component';
import { LoginComponent } from './header/login/login.component';
import { VacanciesComponent } from './header/vacancies/vacancies.component';
import { CreateNewVacancyFormComponent } from './header/vacancies/create-new-vacancy-form/create-new-vacancy-form.component';
import { CreateNewAccountFormComponent } from './header/login/create-new-account-form/create-new-account-form.component';
import { LoginFormComponent } from './header/login/login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    VacanciesComponent,
    CreateNewVacancyFormComponent,
    CreateNewAccountFormComponent,
    LoginFormComponent,
  ],
  imports: [FormsModule, BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
