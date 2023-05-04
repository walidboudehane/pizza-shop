import { Component } from '@angular/core';
import { Cart } from '../shared/models/cart';
import { CartService } from '../services/cart/cart.service';
import { CartItem } from '../shared/models/cartItem';
import { PizzaService } from '../services/pizzas/pizza.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {
  cart!:Cart;
  constructor(private cartService: CartService,private pizzaService:PizzaService) { 
    
    this.setCart();
  }
  ngOnInit(): void {
  }

  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.pizza.id);
    this.setCart();
  }

  changeQuantity(cartItem:CartItem, quantityInString:string){
    const quantity= parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.pizza.id, quantity);
    this.setCart();
  }

  setCart(){
    this.cart = this.cartService.getCart();
  }

}
