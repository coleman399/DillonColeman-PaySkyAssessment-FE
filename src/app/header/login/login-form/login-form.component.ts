import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  @Output() signInEmitter: EventEmitter<string> = new EventEmitter<string>();
  @Output() navigateToForgotPasswordFormEmitter: EventEmitter<string> =
    new EventEmitter<string>();

  signIn() {
    console.log('LoginFormComp signIn() called');
    this.signInEmitter.emit('sign-in');
  }

  navigateToForgotPasswordForm() {
    console.log('LoginFormComp navigateToForgotPasswordForm() called');
    this.navigateToForgotPasswordFormEmitter.emit('forgot-password-form');
  }
}
