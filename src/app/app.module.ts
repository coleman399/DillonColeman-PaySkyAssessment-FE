import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { VacanciesComponent } from './vacancies/vacancies.component';
import { CreateNewVacancyFormComponent } from './vacancies/create-new-vacancy-form/create-new-vacancy-form.component';
import { CreateNewAccountFormComponent } from './login/create-new-account-form/create-new-account-form.component';
import { LoginFormComponent } from './login/login-form/login-form.component';

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
