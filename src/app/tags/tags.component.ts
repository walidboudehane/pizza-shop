import { Component, Input } from '@angular/core';
import { Tag } from '../shared/models/tag';
import { PizzaService } from '../services/pizzas/pizza.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
  
  @Input()
  pizzaPageTags?:String[];
  @Input()
  justifyContent:string='center';
  tags?:Tag[]=[];
  constructor (private pizzaService:PizzaService){}
  ngOnInit():void{
    if(!this.pizzaPageTags)
    this.tags = this.pizzaService.getAllTags();
  }

}
