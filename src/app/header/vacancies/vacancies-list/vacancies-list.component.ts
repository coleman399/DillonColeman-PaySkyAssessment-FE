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
  @Output() createNewVacancyEmitter = new EventEmitter<string>();

  createNewVacancy() {
    console.log('createNewVacancy() called');
    this.createNewVacancyEmitter.emit('create-new-vacancy');
  }
}
