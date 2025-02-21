import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class SurveyComponent {
  @Output() closeSurvey = new EventEmitter<void>();

  surveyData = {
    experience: '',
    customerService: '',
    comments: ''
  };

  close() {
    this.closeSurvey.emit();
  }

  submitSurvey() {
    console.log('Datos de la encuesta:', this.surveyData);
    alert('Gracias por completar la encuesta!');
    this.close();
  }
}
