import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Producto } from '../model/producto.model';
import { RouterTestingHarness } from '@angular/router/testing';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  //array de objetos q comienza vacío y se actualiza a medida que se agreguen, eliminen o modifiquen productos
  //es privado solo pq el servicio puede modificarlo directamente 
  private carritoSubject = new BehaviorSubject<{ producto: Producto; cantidad: number }[]>([]);

  // Se expone el observable para que otros componentes puedan suscribirse y reaccionar a los cambios.
  carrito$ = this.carritoSubject.asObservable()

  agregarAlcarrito(producto: Producto) {
    //Obtiene la lista actual de productos en el carrito con getValue()
    const productos = this.carritoSubject.getValue();

    //Busca si ya existe el producto en el carrito (find comparando por id).
    const encontrado = productos.find(p => p.producto.id === producto.id)

    if (encontrado) {
      encontrado.cantidad++
    } else {
      //Si no existe, crea una nueva entrada { producto, cantidad: 1 } y actualiza el BehaviorSubject con next().
      this.carritoSubject.next([...productos, { producto, cantidad: 1 }])
    }
  }

//Filtra el carrito, dejando solo los productos cuyo id no coincide con el que queremos eliminar.
//Actualiza el estado del carrito con next().
  eliminarDelCarrito(productoId: number) {
    const productos = this.carritoSubject.getValue().filter(p => p.producto.id !== productoId)
    this.carritoSubject.next(productos)
  }

  //borra todo el contenido del carrito enviando un array vacío
  vaciarCarrito() {
    this.carritoSubject.next([])
  }


  // metodo para actualizar la cantidad de un producto en el carrito 
  actualizarCantidad(productoId: number, nuevaCantidad: number) {
    //recorremos el carrito y actualizamos la csntidad del producto con el id dado
    const productos = this.carritoSubject.getValue().map(item => {
      if (item.producto.id === productoId) {
        //Si lo encuentra, devuelve una copia del objeto con la cantidad actualizada
        return { ...item, cantidad: nuevaCantidad }
      }
      return item
    })
    //actualiza el behavior subject con la nueva lista 
    this.carritoSubject.next(productos)
  }

  //metodo que devuelve el carrito completo como un arreglo 
  obtenerProductos(): { producto: Producto; cantidad: number }[] {
    return this.carritoSubject.getValue();
  }

  //metodo para calcular el total a pagar (precio * cantidad de cada producto)
  obtenerTotal(): number {
    const productos = this.carritoSubject.getValue();
    //usamos reduce para sumar los subtotales de cada producto
    return productos.reduce((total, item) => total + item.producto.precio * item.cantidad, 0)
  }

  constructor() { }
}
