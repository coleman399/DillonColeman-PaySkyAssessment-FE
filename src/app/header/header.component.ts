import { Component, Output, EventEmitter, Injectable } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
@Injectable({ providedIn: 'root' })
export class HeaderComponent {
  @Output() currentViewEmitter: EventEmitter<string> =
    new EventEmitter<string>();

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
