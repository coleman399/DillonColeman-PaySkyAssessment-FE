import { Component, Injectable, Input, Output } from '@angular/core';
import { LoginFormComponent } from './login-form/login-form.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
@Injectable({ providedIn: 'root' })
export class LoginComponent {}
