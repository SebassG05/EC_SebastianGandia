import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SurveyComponent } from './components/survey/survey.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterModule, SurveyComponent, CommonModule]
})
export class AppComponent {
  title = '24seconds';
  showSurvey = false;

  openSurvey() {
    this.showSurvey = true;
  }

  closeSurvey() {
    this.showSurvey = false;
  }
}
