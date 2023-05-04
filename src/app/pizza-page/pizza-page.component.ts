import { Component } from '@angular/core';
import { Pizza } from '../shared/models/pizza';
import { ActivatedRoute } from '@angular/router';
import { PizzaService } from '../services/pizzas/pizza.service';

@Component({
  selector: 'app-pizza-page',
  templateUrl: './pizza-page.component.html',
  styleUrls: ['./pizza-page.component.css']
})
export class PizzaPageComponent {
  pizza!:Pizza;
  constructor(private activatedRoute:ActivatedRoute,private pizzaService:PizzaService){
    activatedRoute.params.subscribe((params)=>{
      if(params['id']) 
        this.pizza=pizzaService.getPizzaByid(params['id']);
    })
  };
  


}
