import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'DillonColeman_PaySkyAssessment_Frontend';
  currentView: string = '';

  updateCurrentView(view: string) {
    console.log(`AppComp updateCurrentView() called, currentView: ${view}`);
    this.currentView = view;
  }
}
