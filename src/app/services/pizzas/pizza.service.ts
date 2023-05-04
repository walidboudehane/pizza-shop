import { Injectable } from '@angular/core';
import {Pizza} from '../../shared/models/pizza';
import { Tag } from 'src/app/shared/models/tag';
@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }
  getAllPizzasBySearchTerm(searchTerm:string) :Pizza[]{
    return  this.getAll().filter(pizza =>
      pizza.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
  getAllTags(): Tag[] {
    return [
      { name: 'All', count: 14 },
      { name: 'Cheese', count: 4 },
      { name: 'Vegetables', count: 2 },
      { name: 'Beef', count: 3 },
      { name: 'Chicken', count: 2 },
      { name: 'Bacon', count: 1 },
      { name: 'Pepperoni', count: 1 },
    ];
  }
  getPizzasByTag(tag:string):Pizza[]{
    return tag == "All" ?
    this.getAll() :
    this.getAll().filter(food => food.tags?.includes(tag))
  }

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
        tags:['Cheese'],

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
        tags:['Cheese','Vegetables']
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
        tags:['Beef','Pepperoni','Cheese']
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

        tags: ['Chicken', 'Bacon','Pepperoni','Beef']
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
        tags: ['chicken', 'Bacon']

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
        tags: ['Chicken', 'Cheese', 'Vegetables']

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
        tags: ['Cheese']
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
        tags: ['Chicken', 'vegetables', 'Bacon','pepperoni','Beef']
      },
    ]
  }
}
