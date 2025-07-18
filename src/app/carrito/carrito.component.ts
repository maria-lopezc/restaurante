import { Component } from '@angular/core';
import { CombosCartService } from '../combos-cart.service';
import { Combo } from '../combos-list/combo';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-carrito',
  standalone: false,
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.scss'
})
export class CarritoComponent {
  cartList$: Observable<Combo[]>;
  constructor(private cart: CombosCartService){
    this.cartList$=cart.cartList.asObservable();
  }
}
