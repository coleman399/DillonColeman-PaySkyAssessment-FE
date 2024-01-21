import { Component, Injectable, Output } from '@angular/core';

@Component({
  selector: 'app-create-new-account-form',
  templateUrl: './create-new-account-form.component.html',
  styleUrls: ['./create-new-account-form.component.css'],
})
@Injectable({ providedIn: 'root' })
export class CreateNewAccountFormComponent {
  @Output() view = 'create-new-account';
}
