import { Component, Output, EventEmitter } from '@angular/core';

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

  vacancies(): void {
    console.log(`HeaderComp getVacancies() called`);
    this.currentViewEmitter.emit('Vacancies');
  }

  login(): void {
    console.log(`HeaderComp login() called`);
    this.currentViewEmitter.emit('Login');
  }

  home(): void {
    console.log(`HeaderComp home() called`);
    this.currentViewEmitter.emit('Home');
  }
}
