import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Combo } from './combos-list/combo';

const URL = 'https://6674d99075872d0e0a97b166.mockapi.io/api/combos';

@Injectable({
  providedIn: 'root'
})
export class CombosService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Combo[]>{
    return this.http.get<Combo[]>(URL)
              .pipe(
                tap( (combos: Combo[]) => combos.forEach(combo => combo.cantidad = 0)),
              );
  }
}
