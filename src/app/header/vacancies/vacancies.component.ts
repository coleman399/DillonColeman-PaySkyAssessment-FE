import { Component, Inject, Injectable, Input, Output } from '@angular/core';

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.css'],
})
export class VacanciesComponent {
  @Input() internalView: string = '';

  updateVacancyView($event: string) {
    console.log('updateVacancyView() called, event output: ' + $event);
    this.internalView = $event;
  }

  ngOnChanges() {
    console.log('ngOnChanges()');
    console.log('internalView: ' + this.internalView);
  }


}
