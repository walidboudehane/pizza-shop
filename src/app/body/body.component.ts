import { Component } from '@angular/core';
import { PizzaService } from '../services/pizzas/pizza.service';
import {Pizza} from '../shared/models/pizza';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  pizzas:Pizza[]=[];


  constructor (private pizzaService : PizzaService, private route:ActivatedRoute){}
  ngOnInit():void{
    this.route.params.subscribe(params => {
      if (params['searchTerm'])
      this.pizzas = this.pizzaService.getAllPizzasBySearchTerm(params['searchTerm']);
      else if (params['tag'])
          this.pizzas=this.pizzaService.getPizzasByTag(params['tag']);
      else
        this.pizzas = this.pizzaService.getAll();
    })
  }
}
