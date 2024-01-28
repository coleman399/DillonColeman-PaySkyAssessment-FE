import { Input, NgModule, Output } from '@angular/core';
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
import { CockpitComponent } from './cockpit/cockpit.component';
import { VacanciesListComponent } from './header/vacancies/vacancies-list/vacancies-list.component';
import { ForgotPasswordFormComponent } from './header/login/forgot-password-form/forgot-password-form.component';
import { FooterComponent } from './footer/footer.component';

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
    CockpitComponent,
    VacanciesListComponent,
    ForgotPasswordFormComponent,
    FooterComponent,
  ],
  imports: [FormsModule, BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
