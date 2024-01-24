import { Component, Injectable } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
@Injectable()
export class LoginComponent {
  internalView: string = '';

  ngOnInit() {
    this.internalView = 'login-form';
  }

  updateLoginView(view: string) {
    console.log('updateLoginView() called, event output: ' + view);
    this.internalView = view;
  }
}
