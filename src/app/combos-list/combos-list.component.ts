import { Component } from '@angular/core';
import { combo } from './combo';

@Component({
  selector: 'app-combos-list',
  standalone: false,
  templateUrl: './combos-list.component.html',
  styleUrl: './combos-list.component.scss'
})
export class CombosListComponent {
  combos: combo[]=[
    {
      titulo:"Suprema Con Papas + Coca Cola 1.5L",
      precio:12000,
      image:"assets/img/suprema.jpg",
      disponible: true,
      cantidad: 0,
    },
    {
      titulo:"2 Hamburguesas Completas",
      precio:15000,
      image:"assets/img/hambur.jpg",
      disponible: true,
      cantidad: 0,
    },
    {
      titulo:"Docena de Empanadas + 2 Pizzas",
      precio:25000,
      image:"assets/img/pizza_emp.jpg", 
      disponible: false,
      cantidad: 0,
    }
  ];

  upQuantity(combo: combo):void{
    combo.cantidad++;
  }

  downQuantity(combo: combo):void{
    if(combo.cantidad > 0)
      combo.cantidad--;
  }

  /*onChangeQuantity(event, combo:combo): void{
    console.log(event.key);
  }*/
}
