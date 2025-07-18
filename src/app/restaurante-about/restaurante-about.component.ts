import { Component } from '@angular/core';

@Component({
  selector: 'app-restaurante-about',
  standalone: false,
  templateUrl: './restaurante-about.component.html',
  styleUrl: './restaurante-about.component.scss'
})
export class RestauranteAboutComponent {
  about={
    "nombre":"Restaurante",
    "direccion":"Pinto 123",
    "email":"restaurante123@gmail.com",
    "telefono":2494123456,
  }
}
