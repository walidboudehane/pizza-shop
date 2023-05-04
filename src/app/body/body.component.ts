import { Component } from '@angular/core';
import { PizzaService } from '../services/pizzas/pizza.service';
import {Pizza} from '../shared/models/pizza';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  pizzas:Pizza[]=[];
  constructor (private pizzaService : PizzaService){}
  ngOnInit():void{
    this.pizzas=this.pizzaService.getAll();
  }
}
