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
@ViewChildren(VacanciesComponent)
export class CockpitComponent {
  @Input() currentView: string = '';
  @Input() internalView: string = '';

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges()');
    console.log(changes);
    console.log('currentView: ' + this.currentView);
  }

  resetView() {
    console.log('resetView()');
    this.currentView = 'vacancies';
    this.internalView = 'vacancies-list';
  }
}
