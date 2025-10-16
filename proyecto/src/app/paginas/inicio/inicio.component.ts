import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Producto } from '../../model/producto.model';
import { RouterModule } from '@angular/router';
import { CarritoService } from '../../servicios/carrito.service';
import { FavoritosService } from '../../servicios/favoritos.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  producto: Producto[] = [
    {
    id: 1,
    nombre: "COLLAR LUCKY ME",
    descripcion: "",
    precio: 28000,
    imagen: "https://acdn-us.mitiendanube.com/stores/026/606/products/481-a460e34bd9801fcae917589153756766-1024-1024.webp",
    disponibilidad: true, 
    marca: "LITHIUM",
    categoria: "COLLAR"
    },

  ]

  //usa estas dependencias para llamar a los servicios
  constructor(private carritoService: CarritoService,
    private favoritosService: FavoritosService
  ) { }

  //metodo para agregar un producto 
  //recibe un producto como parametro, llama al metodo del carritoservice para agregarlo al carrito y lo actualiza
  agregarAlCarrito(producto: Producto) {
    this.carritoService.agregarAlcarrito(producto)
  }

  //llama al metodo del favoritosservice para agregarlo a la lista de favoritos y muestra un alert como confirmación al usuario. 
  agregarAFavoritos(producto: Producto) {
    this.favoritosService.agregarAFavoritos(producto)
    alert("Producto agregado a favoritos")
  }
}


