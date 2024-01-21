import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() currentView = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
    this.home();
  }

  getVacancies(): void {
    console.log('getVacancies()');
    this.currentView.emit('vacancies');
  }

  login(): void {
    console.log('login()');
    this.currentView.emit('login');
  }

  home(): void {
    console.log('home()');
    this.currentView.emit('home');
  }
}
