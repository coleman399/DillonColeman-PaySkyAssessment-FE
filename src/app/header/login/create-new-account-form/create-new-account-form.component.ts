import { Component, EventEmitter, Injectable, Output } from '@angular/core';

@Component({
  selector: 'app-create-new-account-form',
  templateUrl: './create-new-account-form.component.html',
  styleUrls: ['./create-new-account-form.component.css'],
})
@Injectable()
export class CreateNewAccountFormComponent {
  @Output() createNewAccountFormEmitter = new EventEmitter<string>();
  @Output() cancelCreatingNewAccountEmitter = new EventEmitter<string>();


}
