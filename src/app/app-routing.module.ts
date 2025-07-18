import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestauranteCombosComponent } from './restaurante-combos/restaurante-combos.component';
import { RestauranteAboutComponent } from './restaurante-about/restaurante-about.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'combos',
    pathMatch: 'full'
  },
  {
    path: 'combos',
    component: RestauranteCombosComponent
  },
  {
    path: 'about',
    component: RestauranteAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
