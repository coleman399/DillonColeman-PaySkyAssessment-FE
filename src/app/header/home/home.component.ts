import { Component, EventEmitter, Injectable, Input, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
@Injectable()
export class HomeComponent {
  internalView: string = '';

  ngOnChanges() {
    console.log('ngOnChanges()');
    console.log('internalView: ' + this.internalView);
  }
}
