import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent {
  @Output() signInEmitter: EventEmitter<string> = new EventEmitter<string>();
  @Output() navigateToForgotPasswordFormEmitter: EventEmitter<string> =
    new EventEmitter<string>();
  username: string | undefined = undefined;
  password: string | undefined = undefined;

  onSubmit(form: NgForm) {
    console.log('Form submitted');
    console.log('LoginFormComp onSubmit() called');
    console.log(`Username: ${this.username}`);
    console.log(`Password: ${this.password}`);
    this.signInEmitter.emit('sign-in');
    this.username = undefined;
    this.password = undefined;
    form.resetForm();
  }

  navigateToForgotPasswordForm() {
    console.log('LoginFormComp navigateToForgotPasswordForm() called');
    this.navigateToForgotPasswordFormEmitter.emit('forgot-password-form');
  }
}
