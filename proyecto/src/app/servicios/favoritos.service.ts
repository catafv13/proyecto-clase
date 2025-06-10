import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Producto } from '../model/producto.model';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {
  private favoritosSubject = new BehaviorSubject <{producto:Producto; cantidad:number}[]>([])

  favoritos$ = this.favoritosSubject.asObservable()

  agregarAfavoritos(producto:Producto){
    const productos = this.favoritosSubject.getValue()
    const encontrado = productos.find(p =>p.producto.id === producto.id)
    if(encontrado){
      encontrado.cantidad++
    }else{
      this.favoritosSubject.next([...productos,{producto,cantidad:1}])
    }
  }
  eliminarDeFavoritos(productoId:number){
    const productos = this.favoritosSubject.getValue().filter(p => p.producto.id !== productoId)
    this.favoritosSubject.next(productos)
  }
  vaciarCarrito(){
    this.favoritosSubject.next([])
  }

  constructor(){}
}