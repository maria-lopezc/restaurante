import { Injectable } from '@angular/core';
import { Combo } from './combos-list/combo';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CombosCartService {
  private _cartList: Combo[] = [];
  cartList: BehaviorSubject<Combo[]>=new BehaviorSubject([]);

  addToCart(combo: Combo){
    let item:Combo = this._cartList.find((v1)=>v1.titulo == combo.titulo);
    if(!item){
      this._cartList.push({... combo});
    }else{
      item.cantidad += combo.cantidad;
    }
    this.cartList.next(this._cartList)
  }

  constructor() { }
}
