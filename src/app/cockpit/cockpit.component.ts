import {
  Component,
  Injectable,
  Input,
  SimpleChanges,
  ViewChildren,
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
  internalView: string = '';

  ngOnChanges() {
    console.log(
      `Cockpit ngOnChanges() called currentView: ${this.currentView}`
    );
  }
}
