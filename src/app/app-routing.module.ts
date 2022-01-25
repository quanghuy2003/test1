import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListCityComponent} from "./compoment/list-city/list-city.component";

const routes: Routes = [
  {
    path:'city',
    component: ListCityComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
