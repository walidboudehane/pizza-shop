import { Component } from '@angular/core';
import { Tag } from '../shared/models/tag';
import { PizzaService } from '../services/pizzas/pizza.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
  tags:Tag[]=[];
  constructor (private pizzaService:PizzaService){}
  ngOnInit():void{
    this.tags=this.pizzaService.getAllTags();
  }

}
