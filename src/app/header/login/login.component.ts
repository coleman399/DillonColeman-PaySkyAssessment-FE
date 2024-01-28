import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  internalView: string = '';

  ngOnInit() {
    this.internalView = 'login-form';
  }

  updateLoginView(view: string) {
    console.log(`LoginComp updateLoginView() called, internalView: ${view}`);
    this.internalView = view;
  }
}
