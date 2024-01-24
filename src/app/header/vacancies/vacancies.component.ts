import { Component, Inject, Injectable, Input, Output } from '@angular/core';

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.css'],
})
export class VacanciesComponent {
  internalView: string = '';

  ngOnInit() {
    this.internalView = 'vacancies-list';
  }

  updateVacancyView(view: string) {
    console.log('updateVacancyView() called, event output: ' + view);
    this.internalView = view;
  }

  ngOnChanges() {
    console.log('ngOnChanges()');
    console.log('internalView: ' + this.internalView);
  }
}
