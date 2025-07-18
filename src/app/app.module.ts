import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CombosListComponent } from './combos-list/combos-list.component';

import {FormsModule} from '@angular/forms';
import { CarritoComponent } from './carrito/carrito.component';
import { RestauranteCombosComponent } from './restaurante-combos/restaurante-combos.component';
import { RestauranteAboutComponent } from './restaurante-about/restaurante-about.component';
import { InputNumberComponent } from './input-number/input-number.component';

@NgModule({
  declarations: [
    AppComponent,
    CombosListComponent,
    CarritoComponent,
    RestauranteCombosComponent,
    RestauranteAboutComponent,
    InputNumberComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
