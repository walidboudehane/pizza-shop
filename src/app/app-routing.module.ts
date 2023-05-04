import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BodyComponent} from './body/body.component';
import { PizzaPageComponent } from './pizza-page/pizza-page.component';

const routes: Routes = [
  {path:'',component:BodyComponent},
  {path:'search/:searchTerm',component:BodyComponent},
  {path:'tag/:tag',component:BodyComponent},
  {path:'pizza/:id',component:PizzaPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
