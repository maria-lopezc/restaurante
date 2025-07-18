import { Component } from '@angular/core';
import { Combo } from './combo';
import { CombosCartService } from '../combos-cart.service';

@Component({
  selector: 'app-combos-list',
  standalone: false,
  templateUrl: './combos-list.component.html',
  styleUrl: './combos-list.component.scss'
})
export class CombosListComponent {
  constructor(private cart: CombosCartService){
  }

  combos: Combo[]=[
    {
      titulo:"Suprema Con Papas + Coca Cola 1.5L",
      precio:12000,
      image:"assets/img/suprema.jpg",
      cantidad: 0,
      maxPedido: 15,
      alcanzado:false,
    },
    {
      titulo:"2 Hamburguesas Completas",
      precio:15000,
      image:"assets/img/hambur.jpg",
      cantidad: 0,
      maxPedido: 10,
      alcanzado:false,
    },
    {
      titulo:"Docena de Empanadas + 2 Pizzas",
      precio:25000,
      image:"assets/img/pizza_emp.jpg",
      cantidad: 0,
      maxPedido: 0,
      alcanzado: false,
    }
  ];

  addToCart(combo: Combo):void{
    this.cart.addToCart(combo);
    combo.maxPedido -= combo.cantidad;
    combo.cantidad=0;
    combo.alcanzado=false;
  }

  maxReached(m: boolean, combo: Combo){
    combo.alcanzado=m;
  }
}
