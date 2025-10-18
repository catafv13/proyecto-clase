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

    {
      id: 2,
      nombre: "COLLAR LUCKY ME",
      descripcion: "",
      precio: 28000,
      imagen: "https://acdn-us.mitiendanube.com/stores/026/606/products/480-c8a5933ee30855355617589160097453-1024-1024.webp",
      disponibilidad: true,
      marca: "LITHIUM",
      categoria: "COLLAR"
    },

    {
      id: 3,
      nombre: "COLLAR LUCKY ME",
      descripcion: "",
      precio: 28000,
      imagen: "https://acdn-us.mitiendanube.com/stores/026/606/products/479-ecc3cff78ab0e2aad917589148875563-1024-1024.webp",
      disponibilidad: true,
      marca: "LITHIUM",
      categoria: "COLLAR"
    },

    {
      id: 4,
      nombre: "COLLAR LUCKY ME",
      descripcion: "",
      precio: 28000,
      imagen: "https://acdn-us.mitiendanube.com/stores/026/606/products/478-5e6cef00113f121b5117589152614746-1024-1024.webp",
      disponibilidad: true,
      marca: "LITHIUM",
      categoria: "COLLAR"
    },

    {
      id: 5,
      nombre: "COLLAR STAR CHARM",
      descripcion: "",
      precio: 28000,
      imagen: "https://acdn-us.mitiendanube.com/stores/026/606/products/194-308b57de10d26a229317481876262140-1024-1024.webp",
      disponibilidad: true,
      marca: "LITHIUM",
      categoria: "COLLAR"
    },


    {
      id: 6,
      nombre: "COLLAR STAR CHARM",
      descripcion: "",
      precio: 28000,
      imagen: "https://acdn-us.mitiendanube.com/stores/026/606/products/190-e08edf4576156ea1ff17481875889853-1024-1024.webp",
      disponibilidad: true,
      marca: "LITHIUM",
      categoria: "COLLAR"
    },

    {
      id: 7,
      nombre: "DIJE PINKY PROMISE",
      descripcion: "",
      precio: 16000,
      imagen: "https://acdn-us.mitiendanube.com/stores/026/606/products/155-0cf2290fc781c2e96217589117489179-1024-1024.webp",
      disponibilidad: true,
      marca: "LITHIUM",
      categoria: "DIJE"
    },

    {
      id: 8,
      nombre: "COLLAR BLESSED",
      descripcion: "",
      precio: 28000,
      imagen: "https://acdn-us.mitiendanube.com/stores/026/606/products/494-8cf19fb8f4a86f4cfe17589128303216-1024-1024.webp",
      disponibilidad: true,
      marca: "LITHIUM",
      categoria: "COLLAR"
    },

    {
      id: 9,
      nombre: "COLLAR BLESSED",
      descripcion: "",
      precio: 28000,
      imagen: "https://acdn-us.mitiendanube.com/stores/026/606/products/493-4c380f3d8e92cd823d17589124744280-1024-1024.webp",
      disponibilidad: true,
      marca: "LITHIUM",
      categoria: "COLLAR"
    },

    {
      id: 10,
      nombre: "COLLAR GOOD FORTUNE",
      descripcion: "",
      precio: 28000,
      imagen: "https://acdn-us.mitiendanube.com/stores/026/606/products/278-fb3c2631404570881c17589166014070-1024-1024.webp",
      disponibilidad: true,
      marca: "LITHIUM",
      categoria: "COLLAR"
    },

    {
      id: 11,
      nombre: "COLLAR GOOD FORTUNE",
      descripcion: "",
      precio: 28000,
      imagen: "https://acdn-us.mitiendanube.com/stores/026/606/products/277-54398a20681ebc064117589135621294-1024-1024.webp",
      disponibilidad: true,
      marca: "LITHIUM",
      categoria: "COLLAR"
    },

    {
      id: 12,
      nombre: "ANILLO THE WINNER",
      descripcion: "",
      precio: 24000,
      imagen: "https://acdn-us.mitiendanube.com/stores/026/606/products/492-f05725cda7b274afa617589105603656-1024-1024.webp",
      disponibilidad: true,
      marca: "LITHIUM",
      categoria: "ANILLO"
    },

    {
      id: 13,
      nombre: "ANILLO THE WINNER",
      descripcion: "",
      precio: 24000,
      imagen: "https://acdn-us.mitiendanube.com/stores/026/606/products/488-d0d506af69adc9f91f17589095041808-1024-1024.webp",
      disponibilidad: true,
      marca: "LITHIUM",
      categoria: "ANILLO"
    },

    {
      id: 14,
      nombre: "ANILLO THE WINNER",
      descripcion: "",
      precio: 24000,
      imagen: "https://acdn-us.mitiendanube.com/stores/026/606/products/287-473a9daf66a280f60217591868962018-1024-1024.webp",
      disponibilidad: true,
      marca: "LITHIUM",
      categoria: "ANILLO"
    },

    {
      id: 15,
      nombre: "ANILLO THE WINNER",
      descripcion: "",
      precio: 24000,
      imagen: "https://acdn-us.mitiendanube.com/stores/026/606/products/491-117978db01bf2a811917589097234400-1024-1024.webp",
      disponibilidad: true,
      marca: "LITHIUM",
      categoria: "ANILLO"
    },

    {
      id: 16,
      nombre: "ANILLO THE WINNER",
      descripcion: "",
      precio: 24000,
      imagen: "https://acdn-us.mitiendanube.com/stores/026/606/products/490-8fafaf10089318f36317591867924586-1024-1024.webp",
      disponibilidad: true,
      marca: "LITHIUM",
      categoria: "ANILLO"
    },

    {
      id: 17,
      nombre: "ANILLO THE WINNER",
      descripcion: "",
      precio: 24000,
      imagen: "https://acdn-us.mitiendanube.com/stores/026/606/products/4933-3db845df9b0724c03317591868311689-1024-1024.webp",
      disponibilidad: true,
      marca: "LITHIUM",
      categoria: "ANILLO"
    },

    {
      id: 18,
      nombre: "ANILLO THE WINNER",
      descripcion: "",
      precio: 24000,
      imagen: "https://acdn-us.mitiendanube.com/stores/026/606/products/489-865e1fcadc9fd68b9717591867982103-1024-1024.webp",
      disponibilidad: true,
      marca: "LITHIUM",
      categoria: "ANILLO"
    },

    {
      id: 19,
      nombre: "ARO FRECKLES (U)",
      descripcion: "",
      precio: 19000,
      imagen: "https://acdn-us.mitiendanube.com/stores/026/606/products/unnamed-2-79a7252052851cc02617589108532775-1024-1024.webp",
      disponibilidad: true,
      marca: "LITHIUM",
      categoria: "ARO"
    },

    {
      id: 20,
      nombre: "ARO FRECKLES (U)",
      descripcion: "",
      precio: 24000,
      imagen: "https://acdn-us.mitiendanube.com/stores/026/606/products/unnamed-1-d4cbba2c85aa0a177d17589109206026-1024-1024.webp",
      disponibilidad: true,
      marca: "LITHIUM",
      categoria: "ARO"
    },

    {
      id: 21,
      nombre: "PULSERA UNFORGETTABLE",
      descripcion: "",
      precio: 20000,
      imagen: "https://acdn-us.mitiendanube.com/stores/026/606/products/263-426140ad4ff3b413e517589106630081-1024-1024.webp",
      disponibilidad: true,
      marca: "LITHIUM",
      categoria: "PULSERA"
    },

    {
      id: 21,
      nombre: "ANILLO MAKE A WISH",
      descripcion: "",
      precio: 24000,
      imagen: "https://acdn-us.mitiendanube.com/stores/026/606/products/482-3c2abaff0371b25e4917589093802303-1024-1024.webp",
      disponibilidad: true,
      marca: "LITHIUM",
      categoria: "ANILLO"
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


