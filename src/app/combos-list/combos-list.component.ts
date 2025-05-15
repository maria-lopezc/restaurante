import { Component } from '@angular/core';

@Component({
  selector: 'app-combos-list',
  standalone: false,
  templateUrl: './combos-list.component.html',
  styleUrl: './combos-list.component.scss'
})
export class CombosListComponent {
  comboSup={
    "titulo":"Suprema Con Papas + Coca Cola 1.5L",
    "precio":12000,
    "image":"assets/img/suprema.jpg",
  }
  comboHam={
    "titulo":"2 Hamburguesas Completas",
    "precio":15000,
    "image":"assets/img/hambur.jpg",
  }
  comboEmp={
    "titulo":"Docena de Empanadas + 2 Pizzas",
    "precio":25000,
    "image":"assets/img/pizza_emp.jpg", 
  }
}
