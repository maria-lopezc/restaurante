import { Component, Input, Output, EventEmitter} from '@angular/core';
@Component({
  selector: 'app-input-number',
  standalone: false,
  templateUrl: './input-number.component.html',
  styleUrl: './input-number.component.scss'
})
export class InputNumberComponent {
  constructor(){}
  @Input()
  cantidad: number;

  @Input()
  max: number;

  @Output()
  cantidadChange: EventEmitter<number>=new EventEmitter <number>();

  @Output()
  maxReached: EventEmitter<boolean>=new EventEmitter <boolean>();

  upQuantity():void{
    if(this.cantidad < this.max){
      this.cantidad++;
      this.cantidadChange.emit(this.cantidad);
    }else{
      this.maxReached.emit(true);
    }
  }

  downQuantity():void{
    if(this.cantidad > 0){
      this.cantidad--;
      this.cantidadChange.emit(this.cantidad);
    }
  }

  changeQuantity(event: KeyboardEvent):void{
    console.log(event.key);
    this.cantidadChange.emit(this.cantidad);
  }
}
