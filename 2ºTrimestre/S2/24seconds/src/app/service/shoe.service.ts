import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Shoe {
  id: number;
  name: string;
  brand: string;
  price: number;
  image: string;
  description: string;
  bestSeller: boolean;
  category: string;
  rating: number;
  style: number;
  cushioning: number;
  support: number;
  budget: number;
}

@Injectable({
  providedIn: 'root'
})
export class ShoeService {
  private shoes: Shoe[] = [
    {
      id: 1,
      name: 'Nike LeBron 20',
      brand: 'Nike',
      price: 200,
      image: 'assets/images/ZapaLebron.png',
      description: 'Zapatillas de alto rendimiento diseñadas para jugadores versátiles.',
      bestSeller: true,
      category: 'Basketball',
      rating: 5,
      style: 0,
      cushioning: 0,
      support: 0,
      budget: 3
    },
    {
      id: 2,
      name: 'Adidas Harden Vol. 7',
      brand: 'Adidas',
      price: 180,
      image: 'assets/images/ZapaHarden.png',
      description: 'Diseñadas para el estilo de juego rápido y ágil de James Harden.',
      bestSeller: true,
      category: 'Basketball',
      rating: 5,
      style: 1,
      cushioning: 1,
      support: 1,
      budget: 2
    },
    {
      id: 3,
      name: 'Under Armour Curry 10',
      brand: 'Under Armour',
      price: 170,
      image: 'assets/images/ZapaCurry.png',
      description: 'La última edición de la línea de zapatillas de Stephen Curry.',
      bestSeller: true,
      category: 'Basketball',
      rating: 4.7,
      style: 2,
      cushioning: 2,
      support: 2,
      budget: 1
    },
    {
      id: 4,
      name: 'Puma MB.02',
      brand: 'Puma',
      price: 160,
      image: 'assets/images/ZapaLamelo.png',
      description: 'Zapatillas inspiradas en LaMelo Ball con diseño llamativo.',
      bestSeller: false,
      category: 'Basketball',
      rating: 4.6,
      style: 3,
      cushioning: 3,
      support: 3,
      budget: 0
    },
    {
      id: 5,
      name: 'Air Jordan 35',
      brand: 'Jordan',
      price: 160,
      image: 'assets/images/ZapaLuka.png',
      description: 'Zapatillas inspiradas en Luka con diseño llamativo.',
      bestSeller: false,
      category: 'Basketball',
      rating: 5,
      style: 0,
      cushioning: 0,
      support: 0,
      budget: 3
    },
    {
      id: 6,
      name: 'Kobe 5 Protro',
      brand: 'Nike',
      price: 195,
      image: 'assets/images/ZapaKobe.png',
      description: 'Kobe 5 Protro "Bruce Lee" rinde homenaje al maestro con el lanzamiento del clásico colorway de 2010.',
      bestSeller: false,
      category: 'Basketball',
      rating: 4.8,
      style: 1,
      cushioning: 1,
      support: 1,
      budget: 2
    },
    {
      id: 7,
      name: 'New Balance TWO WXY ',
      brand: 'New Balance',
      price: 140,
      image: 'assets/images/ZapaNewBalance.png',
      description: 'Diseñadas para máxima estabilidad y soporte en la cancha.',
      bestSeller: false,
      category: 'Basketball',
      rating: 4.1,
      style: 2,
      cushioning: 2,
      support: 2,
      budget: 1
    },
    {
      id: 8,
      name: 'Nike KD 15',
      brand: 'Nike',
      price: 185,
      image: 'assets/images/ZapaKD.png',
      description: 'Zapatillas ligeras y receptivas diseñadas para el juego versátil de Kevin Durant.',
      bestSeller: true,
      category: 'Basketball',
      rating: 4.7,
      style: 3,
      cushioning: 3,
      support: 3,
      budget: 0
    },
    {
      id: 9,
      name: 'Jordan Zion 2',
      brand: 'Jordan',
      price: 150,
      image: 'assets/images/ZapaZion.png',
      description: 'Diseñadas para la potencia y agilidad de Zion Williamson.',
      bestSeller: false,
      category: 'Basketball',
      rating: 4.2,
      style: 0,
      cushioning: 0,
      support: 0,
      budget: 3
    },
    {
      id: 10,
      name: 'Anta Klay Thompson KT ',
      brand: 'Anta',
      price: 130,
      image: 'assets/images/ZapaKlay.png',
      description: 'Zapatillas diseñadas para la precisión y estabilidad del tiro de Klay Thompson.',
      bestSeller: false,
      category: 'Basketball',
      rating: 4.0,
      style: 1,
      cushioning: 1,
      support: 1,
      budget: 2
    },
    {
      id: 11,
      name: 'Li-Ning Way of Wade 10',
      brand: 'Li-Ning',
      price: 220,
      image: 'assets/images/ZapaLi.png',
      description: 'Diseñadas por Dwyane Wade con un enfoque en el confort y el estilo.',
      bestSeller: true,
      category: 'Basketball',
      rating: 4.9,
      style: 2,
      cushioning: 2,
      support: 2,
      budget: 1
    },
    {
      id: 12,
      name: 'Reebok Shaq Attaq',
      brand: 'Reebok',
      price: 150,
      image: 'assets/images/ZapaShaq.png',
      description: 'El clásico modelo de Shaquille O’Neal regresa con su diseño icónico.',
      bestSeller: false,
      category: 'Basketball',
      rating: 4.4,
      style: 3,
      cushioning: 3,
      support: 3,
      budget: 0
    }
  ];

  private answers: number[] = [];

  constructor() {}

  getShoes(): Observable<Shoe[]> {
    return of(this.shoes);
  }

  setAnswers(answers: number[]) {
    this.answers = answers;
  }

  getIdealShoe() {
    return this.shoes.find(shoe =>
      shoe.style === this.answers[0] &&
      shoe.cushioning === this.answers[1] &&
      shoe.support === this.answers[2] &&
      shoe.budget === this.answers[3]
    );
  }

  getRecommendations() {
    return this.shoes.filter(shoe =>
      shoe.style === this.answers[0] &&
      shoe.cushioning === this.answers[1] &&
      shoe.support === this.answers[2] &&
      shoe.budget === this.answers[3] &&
      shoe !== this.getIdealShoe()
    );
  }

  private shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
