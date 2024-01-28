import { Component } from '@angular/core';

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.css'],
})
export class VacanciesComponent {
  componentTitle: string = 'Vacancies'
  internalView: string = '';

  ngOnInit() {
    this.internalView = 'vacancies-list';
  }

  updateVacancyView(view: string) {
    console.log(`VacanciesComp updateVacancyView() called, internalView: ${view}`);
    this.internalView = view;
  }
}
