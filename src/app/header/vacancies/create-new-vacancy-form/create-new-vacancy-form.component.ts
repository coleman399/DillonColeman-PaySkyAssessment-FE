import { Component, EventEmitter, Injectable, Output } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-new-vacancy-form',
  templateUrl: './create-new-vacancy-form.component.html',
  styleUrls: ['./create-new-vacancy-form.component.css']
})
@Injectable()
export class CreateNewVacancyFormComponent {
  @Output() cancelCreatingNewVacancyEmitter: EventEmitter<string> = new EventEmitter<string>();
  volume: number | undefined = undefined;
  expirationDate: string | undefined = undefined;
  datePlaceholder: string = this.todaysDate();

  onSubmit(form: NgForm) {
    !this.volume ? this.volume = 1 : null;
    console.log('Form submitted');
    console.log(`Volume: ${this.volume}`);
    console.log(`Expiration Date: ${this.expirationDate}`);
    form.resetForm();
  }

  protected cancel(): void {
    console.log('CreateNewVacancyFormComp cancel() called');
    this.cancelCreatingNewVacancyEmitter.emit('vacancies-list');
  }

  private todaysDate(): string {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();
    const todaysDate = `${mm}/${dd}/${yyyy}`;

    return todaysDate;
  }

}
