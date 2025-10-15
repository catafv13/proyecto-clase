import { Component } from '@angular/core';
import { Producto } from '../../model/producto.model';
import { CarritoService } from '../../servicios/carrito.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FavoritosService } from '../../servicios/favoritos.service';

@Component({
  selector: 'app-producto',
  imports: [CommonModule, RouterModule],
  templateUrl: './ofertas.component.html',
  styleUrl: './ofertas.component.css'
})
export class OfertasComponent {

  productos:Producto[] = [
    /*buzos */
    {
      id: 1,
      nombre: "hoodie russell vintage",
      descripcion: "20% off con transferencia",
      precio: 20000,
      imagen: "https://i.pinimg.com/736x/2b/46/b9/2b46b975dbb0332d38945169b6ccb574.jpg",
      disponibilidad: true,
      marca: "LITHIUM",
      categoria: "collar"
    },

    {
      id: 2,
      nombre: "hoodie russell vintage",
      descripcion: "10% off con transferencia o efectivo",
      precio: 40000,
      imagen: "https://i.pinimg.com/736x/a1/c1/c5/a1c1c54a5e8def160dbee6043efcac6f.jpg",
      disponibilidad: true,
      marca: "LITHIUM",
      categoria: "collar"
    },

    {
      id: 3,
      nombre: "hoodie russell vintage",
      descripcion: "15% off en la segunda unidad",
      precio: 70000,
      imagen: "https://i.pinimg.com/736x/42/d8/42/42d842627f3f7c77cd0a7234b478cb5e.jpg",
      disponibilidad: true,
      marca: "LITHIUM",
      categoria: "collar"
    },

    {
      id: 4,
      nombre: "hoodie russell vintage",
      descripcion: "5% off",
      precio: 65000,
      imagen: "https://i.pinimg.com/736x/05/86/26/0586263156dffa9646bd0e75cbad7ebb.jpg",
      disponibilidad: true,
      marca: "LITHIUM",
      categoria: "collar"
    },
  ]

  constructor(private carritoService: CarritoService,
    private favoritosService: FavoritosService
  ) { }
  //metodo para agregar un producto 
  agregarAlCarrito(producto: Producto) {
    this.carritoService.agregarAlcarrito(producto)
  }

  agregarAFavoritos(producto: Producto) {
    this.favoritosService.agregarAFavoritos(producto)
    alert("Producto agregado a favoritos")
  }
}