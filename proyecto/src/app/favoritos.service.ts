import { Injectable } from '@angular/core';
import { Producto } from './model/producto.model';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {
  agregarAFavoritos(producto: Producto) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
