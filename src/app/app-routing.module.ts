import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BodyComponent} from './body/body.component';

const routes: Routes = [
  {path:'',component:BodyComponent},
  {path:'search/:searchTerm',component:BodyComponent},
  {path:'tag/:tag',component:BodyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
