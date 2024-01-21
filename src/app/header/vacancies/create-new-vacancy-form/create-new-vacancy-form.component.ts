import { Component, EventEmitter, Injectable, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-new-vacancy-form',
  templateUrl: './create-new-vacancy-form.component.html',
  styleUrls: ['./create-new-vacancy-form.component.css']
})
@Injectable()
export class CreateNewVacancyFormComponent {
  @Output() cancelCreatingNewVacancy = new EventEmitter<string>();
  volume: number = 0;
  expirationDate: Date = new Date();

  onSubmit(form: NgForm) {
    console.log('Form submitted');
    console.log(`Volume: ${this.volume}`);
    console.log(`Expiration Date: ${this.expirationDate}`);
    form.reset();
  }

  cancel() {
    this.cancelCreatingNewVacancy.emit('vacancies-list');
  }

}
