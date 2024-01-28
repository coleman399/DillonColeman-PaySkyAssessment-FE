import {
  Component,
  Injectable,
  Input,
} from '@angular/core';
import { VacanciesComponent } from '../header/vacancies/vacancies.component';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
@Injectable()
export class CockpitComponent {
  @Input() currentView: string = '';

  ngOnChanges() {
    console.log(
      `CockpitComp ngOnChanges() called, currentView: ${this.currentView}`
    );
  }
}
