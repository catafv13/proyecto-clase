import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Producto } from '../../model/producto.model';
import { FormsModule } from '@angular/forms';
import { FavoritosService } from '../../servicios/favoritos.service';
import { CarritoService } from '../../servicios/carrito.service';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-favoritos',
  imports: [CommonModule, FormsModule,RouterModule],
  templateUrl: './favoritos.component.html',
  standalone: true
})
export class FavoritosComponent implements OnInit {
  //se define una propiedad para almacenar los productos marcados como favoritos 
  productosFavoritos: Producto[]= [];

  //constructor del componente: se inyectan los servicioa de favoritos y carrito
  constructor(
    private favoritosService: FavoritosService, //servicio para manejar productos favoritos
    private carritoService: CarritoService //servicio para manejar el carrito de compras
  ) {}

  //metodo del ciclo de vida de angular que se ejecuta al inicar el componente
  ngOnInit(): void {
    //se suscribe al observable de favoritos del servicio
    //cada vez que cambien los favoritos, se actualiza la lista local 'productosFavoritos'
    this.favoritosService.favoritos$.subscribe((productos)=> {
      this.productosFavoritos = productos;
    });
  }

  //metodo para eliminar un producto de la lista de favoritos 
  eliminarFavorito(productoId: number){
    //llama al servicio para eliminar el producto por su ID
    this.favoritosService.eliminarDeFavoritos(productoId);
  }

  //metodo para agregar un producto al carrito de compras
  agregarAlCarrito(producto: Producto){
    //llama al servicio de carrito y le pasa el producto seleccionado
    this.carritoService.agregarAlcarrito(producto)
  }

  
}
  
