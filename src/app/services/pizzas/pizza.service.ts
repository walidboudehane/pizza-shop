import { Injectable } from '@angular/core';
import {Pizza} from '../../shared/models/pizza';
@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }
  getAll():Pizza[]{
    return [
      {
        id: 1,
        name: 'Cheese Pizza',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/images/pizza1.jpg',

      },
      {
        id: 2,
        name: 'Veggie Pizza',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/images/pizza2.jpg',

      },
      {
        id: 3,
        name: 'Pepperoni Pizza',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/images/pizza3.jpg',

      },
      {
        id: 4,
        name: 'Meat Pizza',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/images/pizza4.jpg',

      },
      {
        id: 5,
        name: 'BBQ Chicken Pizza',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['USA'],
        stars: 4.5,
        imageUrl: '/assets/images/pizza5.jpg',

      },
      {
        id: 6,
        name: 'Buffalo Pizza',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['USA'],
        stars: 4.5,
        imageUrl: '/assets/images/pizza6.jpg',

      },
      {
        id: 7,
        name: 'Margherita Pizza',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/images/pizza7.jpg',
      },
      {
        id: 8,
        name: 'Supreme Pizza',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['USA'],
        stars: 4.5,
        imageUrl: '/assets/images/pizza8.jpg',
      },
    ]
  }
}
