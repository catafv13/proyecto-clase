import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Producto } from '../../model/producto.model';
import { RouterModule } from '@angular/router';
import { CarritoService } from '../../servicios/carrito.service';
import { FavoritosService } from '../../servicios/favoritos.service';
import { ProductService } from '../../servicios/product.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
producto: Producto[] = []; 
  //usa estas dependencias para llamar a los servicios
  constructor(private carritoService: CarritoService, private ProductService: ProductService,
    private favoritosService: FavoritosService
  ) { }

  //metodo para agregar un producto 
  //recibe un producto como parametro, llama al metodo del carritoservice para agregarlo al carrito y lo actualiza
  agregarAlCarrito(producto: Producto) {
    this.carritoService.agregarAlCarrito(producto)
  }

  //llama al metodo del favoritosservice para agregarlo a la lista de favoritos y muestra un alert como confirmación al usuario. 
  agregarAFavoritos(producto: Producto) {
    this.favoritosService.agregarFavorito(producto)
    alert("Producto agregado a favoritos")
  }


}
