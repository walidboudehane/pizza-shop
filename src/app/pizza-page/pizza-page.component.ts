import { Component } from '@angular/core';
import { Pizza } from '../shared/models/pizza';
import { ActivatedRoute, Router } from '@angular/router';
import { PizzaService } from '../services/pizzas/pizza.service';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-pizza-page',
  templateUrl: './pizza-page.component.html',
  styleUrls: ['./pizza-page.component.css']
})
export class PizzaPageComponent {
  pizza!:Pizza;
  constructor(private activatedRoute:ActivatedRoute,
    private foodService: PizzaService,
    private cartService: CartService,
    private router: Router){
      activatedRoute.params.subscribe((params) => {
        if(params['id'])
        this.pizza = foodService.getPizzaByid(params['id']);
      })
    }
    ngOnInit(): void {
    }
  
    addToCart(){
      this.cartService.addToCart(this.pizza);
      this.router.navigateByUrl('/cart-page');
    }
  

  };





