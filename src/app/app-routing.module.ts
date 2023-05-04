import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BodyComponent} from './body/body.component';
import { PizzaPageComponent } from './pizza-page/pizza-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';

const routes: Routes = [
  {path:'',component:BodyComponent},
  {path:'search/:searchTerm',component:BodyComponent},
  {path:'tag/:tag',component:BodyComponent},
  {path:'pizza/:id',component:PizzaPageComponent},
  {path: 'cart-page',component:CartPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
