import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'DillonColeman_PaySkyAssessment_Frontend';
  @Input() currentView: string = '';

  updateCurrentView($event: string) {
    console.log('updateCurrentView() called, event output: ' + $event);
    this.currentView = $event;
  }
}
