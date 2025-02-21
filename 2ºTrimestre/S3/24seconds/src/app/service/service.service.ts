import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

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
}

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
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
      rating: 5
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
      rating: 5
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
      rating: 4.7
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
      rating: 4.6
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
      rating: 5
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
      rating: 4.8
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
      rating: 4.1
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
      rating: 4.7
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
      rating: 4.2
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
      rating: 4.0
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
      rating: 4.9
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
      rating: 4.4
    }
  ];

  private cartItems: Shoe[] = [];
  private cartItemsSubject = new BehaviorSubject<Shoe[]>([]);
  private cart: Shoe[] = [];
  private cartSubject = new BehaviorSubject<Shoe[]>(this.cart);

  private comparisonItems: Shoe[] = [];
  private comparisonItemsSubject = new BehaviorSubject<Shoe[]>(this.comparisonItems);

  constructor() {}

  getShoes(): Observable<Shoe[]> {
    return of(this.shoes);
  }

  getBestSellers(): Observable<Shoe[]> {
    const bestSellers = this.shoes.filter(shoe => shoe.bestSeller);
    return of(bestSellers);
  }

  getCheapestShoes(count: number): Observable<Shoe[]> {
    const sorted = this.shoes.sort((a, b) => a.price - b.price);
    return of(sorted.slice(0, count));
  }

  getCheapShoesUnder(priceLimit: number = 160): Observable<Shoe[]> {
    return of(this.shoes.filter(shoe => shoe.price < priceLimit));
  }

  getFilteredShoes(filters: any): Observable<Shoe[]> {
    console.log('Recibido en getFilteredShoes:', filters);

    let filteredShoes = [...this.shoes];

    if (filters.category && filters.category !== '') {
      filteredShoes = filteredShoes.filter(shoe => shoe.category === filters.category);
    }

    if (filters.brand && filters.brand !== '') {
      filteredShoes = filteredShoes.filter(shoe => shoe.brand === filters.brand);
    }

    if (filters.rating && filters.rating > 0) {
      filteredShoes = filteredShoes.filter(shoe => shoe.rating >= filters.rating);
    }

    if (filters.minPrice !== undefined && filters.maxPrice !== undefined) {
      filteredShoes = filteredShoes.filter(shoe => shoe.price >= filters.minPrice && shoe.price <= filters.maxPrice);
    }

    console.log('Resultado final sin duplicar:', filteredShoes);
    return of(filteredShoes);
  }

  addToCart(shoe: Shoe) {
    this.cartItems.push(shoe);
    this.cartItemsSubject.next(this.cartItems);
    this.cart.push(shoe);
    this.cartSubject.next(this.cart);
  }

  getCartItems(): Observable<Shoe[]> {
    return this.cartItemsSubject.asObservable();
  }

  removeFromCart(shoeId: number): void { // Ensure this method accepts a number
    this.cart = this.cart.filter(shoe => shoe.id !== shoeId);
    this.cartSubject.next(this.cart);
  }

  getCart(): Observable<Shoe[]> {
    return this.cartSubject.asObservable();
  }

  addToComparison(shoe: Shoe) {
    if (!this.comparisonItems.find(item => item.id === shoe.id)) {
      this.comparisonItems.push(shoe);
      this.comparisonItemsSubject.next(this.comparisonItems);
    }
  }

  removeFromComparison(shoeId: number): void {
    this.comparisonItems = this.comparisonItems.filter(shoe => shoe.id !== shoeId);
    this.comparisonItemsSubject.next(this.comparisonItems);
  }

  getComparisonItems(): Observable<Shoe[]> {
    return this.comparisonItemsSubject.asObservable();
  }
}
