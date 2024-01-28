import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-forgot-password-form',
  templateUrl: './forgot-password-form.component.html',
  styleUrls: ['./forgot-password-form.component.css']
})
export class ForgotPasswordFormComponent {
  cancelForgotPasswordEmitter: EventEmitter<string> = new EventEmitter<string>();

  cancelForgotPassword() {
    console.log('ForgotPasswordFormComp cancelForgotPassword() called');
    this.cancelForgotPasswordEmitter.emit('login-form');
  }
}
