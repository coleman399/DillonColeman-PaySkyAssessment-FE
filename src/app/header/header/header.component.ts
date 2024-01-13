import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  Vacancies: string[] = [];


  constructor() { }


  ngOnInit(): void {
  }

  getVacancies(): string[] {
    this.Vacancies = ['Vacancy 1', 'Vacancy 2', 'Vacancy 3', 'Vacancy 4', 'Vacancy 5', 'Vacancy 6', 'Vacancy 7', 'Vacancy 8', 'Vacancy 9', 'Vacancy 10'];
    console.log(this.Vacancies);
    return this.Vacancies;
  }

  login(): void {
    alert('Login button clicked');
  }
}
