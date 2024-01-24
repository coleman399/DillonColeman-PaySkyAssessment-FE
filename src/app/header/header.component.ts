import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() currentViewEmitter = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
    this.home();
  }

  getVacancies(): void {
    console.log('getVacancies()');
    this.currentViewEmitter.emit('vacancies');
  }

  login(): void {
    console.log('login()');
    this.currentViewEmitter.emit('login');
  }

  home(): void {
    console.log('home()');
    this.currentViewEmitter.emit('home');
  }
}
