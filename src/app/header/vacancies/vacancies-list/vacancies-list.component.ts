import {
  Component,
  EventEmitter,
  Injectable,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-vacancies-list',
  templateUrl: './vacancies-list.component.html',
  styleUrls: ['./vacancies-list.component.css'],
})
@Injectable()
export class VacanciesListComponent {
  @Output() createNewVacancyEvent = new EventEmitter<string>();

  createNewVacancy() {
    console.log('createNewVacancy() called');
    this.createNewVacancyEvent.emit('create-new-vacancy');
  }
}
