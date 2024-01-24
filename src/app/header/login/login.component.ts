import { Component, EventEmitter, Injectable, Input, Output } from '@angular/core';
import { LoginFormComponent } from './login-form/login-form.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
@Injectable()
export class LoginComponent {
  @Input() internalView: string = '';

  updateLoginView($event: string) {
    console.log('updateLoginView() called, event output: ' + $event);
    this.internalView = $event;
  }

  ngOnChanges() {
    console.log('ngOnChanges()');
    console.log('internalView: ' + this.internalView);
  }
}
