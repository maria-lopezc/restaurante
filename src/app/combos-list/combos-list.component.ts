import { Component } from '@angular/core';
import { Combo } from './combo';
import { CombosCartService } from '../combos-cart.service';
import { CombosService } from '../combos.service';

@Component({
  selector: 'app-combos-list',
  standalone: false,
  templateUrl: './combos-list.component.html',
  styleUrl: './combos-list.component.scss'
})
export class CombosListComponent {
  constructor(
    private cart: CombosCartService,
    private combosService: CombosService
  ){
  }

  combos: Combo[]=[];

  ngOnInit():void{
    this.combosService.getAll()
      .subscribe(combos=>this.combos = combos);
  }

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
