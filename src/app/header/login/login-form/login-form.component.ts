import { Component, EventEmitter, Injectable, Output } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
@Injectable()
export class LoginFormComponent {
  @Output() loginFormEmitter = new EventEmitter<string>();

  login() {
    console.log('login() called');
    this.loginFormEmitter.emit('login');
  }
}
