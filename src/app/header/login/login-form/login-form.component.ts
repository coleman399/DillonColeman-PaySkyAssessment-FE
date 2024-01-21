import { Component, Injectable, Output } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
@Injectable({ providedIn: 'root' })
export class LoginFormComponent {
  @Output() view = 'login-form';
}
