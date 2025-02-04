import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ShoeService } from '../../service/shoe.service';

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class SurveyFormComponent {
  currentQuestionIndex = 0;
  answers: number[] = [];

  questions = [
    {
      title: '¿Cuál es tu estilo de juego?',
      options: ['Ofensivo', 'Defensivo', 'Versátil', 'Tirador']
    },
    {
      title: '¿Qué tipo de amortiguación prefieres?',
      options: ['Suave', 'Firme', 'Reactiva', 'Balanceada']
    },
    {
      title: '¿Qué tipo de soporte necesitas?',
      options: ['Alto', 'Medio', 'Bajo', 'Ninguno']
    },
    {
      title: '¿Cuál es tu presupuesto?',
      options: ['< $100', '$100 - $150', '$150 - $200', '> $200']
    }
  ];

  constructor(private router: Router, private shoeService: ShoeService) {}

  selectOption(optionIndex: number) {
    this.answers[this.currentQuestionIndex] = optionIndex;
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    } else {
      this.shoeService.setAnswers(this.answers);
      this.router.navigate(['/results']);
    }
  }
}
