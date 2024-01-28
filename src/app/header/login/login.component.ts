import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  @Output() updateCockpitViewEmitter: EventEmitter<any> = new EventEmitter<any>();
  internalView: string = '';

  ngOnInit() {
    this.internalView = 'login-form';
  }

  updateLoginView(view: string) {
    console.log(`LoginComp updateLoginView() called, internalView: ${view}`);
    this.internalView = view;
  }

  signIn(signIn: string) {
    console.log(`LoginComp signIn() called, internalView: ${signIn}`);
  }

  cancelLogin() {
    console.log(`LoginComp cancelLogin() called`);

  }
}
