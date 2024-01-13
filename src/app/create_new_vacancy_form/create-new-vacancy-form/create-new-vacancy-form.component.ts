import { Component } from '@angular/core';

@Component({
  selector: 'app-create-new-vacancy-form',
  templateUrl: './create-new-vacancy-form.component.html',
  styleUrls: ['./create-new-vacancy-form.component.css']
})
export class CreateNewVacancyFormComponent {







  onExpirationDateChange($event: Event) {
    console.log($event);
  }

  onVolumeChange($event: Event) {
    console.log($event);
  }

}
