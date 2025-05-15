import { CommonModule, NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarritoService } from '../../servicios/carrito.service';
import { Producto } from '../../model/producto.model';

@Component({
  selector: 'app-producto',
  imports: [NgFor, NgIf, CommonModule, RouterModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {

  Productos: Producto[] = [
    /*buzos */
    {
      id: 1,
      nombre: "hoodie russell vintage",
      descripcion: "color: blanco",
      precio: 70000,
      imagen: "https://i.pinimg.com/736x/2b/46/b9/2b46b975dbb0332d38945169b6ccb574.jpg",
      disponibilidad: true
    },

    {
      id: 2,
      nombre: "hoodie russell vintage",
      descripcion: "color: gris",
      precio: 70000,
      imagen: "https://i.pinimg.com/736x/a1/c1/c5/a1c1c54a5e8def160dbee6043efcac6f.jpg",
      disponibilidad: true
    },

    {
      id: 3,
      nombre: "hoodie russell vintage",
      descripcion: "color: negro",
      precio: 70000,
      imagen: "https://i.pinimg.com/736x/42/d8/42/42d842627f3f7c77cd0a7234b478cb5e.jpg",
      disponibilidad: true
    },

    {
      id: 4,
      nombre: "hoodie russell vintage",
      descripcion: "color: marrón óxido",
      precio: 70000,
      imagen: "https://i.pinimg.com/736x/05/86/26/0586263156dffa9646bd0e75cbad7ebb.jpg",
      disponibilidad: true
    },

    {
      id: 5,
      nombre: "hoodie russell vintage",
      descripcion: "color: marrón",
      precio: 70000,
      imagen: "https://i.pinimg.com/736x/e0/15/67/e01567b51040368ab86992e6166ec332.jpg",
      disponibilidad: true
    },

    {
      id: 6,
      nombre: "hoodie russell vintage",
      descripcion: "color: verde inglés",
      precio: 70000,
      imagen: "https://i.pinimg.com/736x/4f/a2/9b/4fa29b0bf77d6550ed04ed971211dd7e.jpg",
      disponibilidad: true
    },

    {
      id: 7,
      nombre: "hoodie russell vintage",
      descripcion: "color: azul marino",
      precio: 70000,
      imagen: "https://i.pinimg.com/736x/61/f4/ad/61f4add5b87f0f4c04948b6da40ed8f3.jpg",
      disponibilidad: true
    },

    {
      id: 8,
      nombre: "hoodie russell vintage",
      descripcion: "color: bordó",
      precio: 70000,
      imagen: "https://i.pinimg.com/736x/f2/57/bd/f257bde1412ed1f97a417499914ba19a.jpg",
      disponibilidad: true
    },

    /*carteras */
     {
      id: 9,
      nombre: "celine bag",
      descripcion: "color: beige",
      precio: 70000,
      imagen: "https://i.pinimg.com/736x/fc/44/b9/fc44b93f6bc3a0535fdaf8ee7cd75152.jpg",
      disponibilidad: true
    },

    {
      id: 10,
      nombre: "coach bag",
      descripcion: "color: beige",
      precio: 70000,
      imagen: "https://i.pinimg.com/736x/a4/c3/06/a4c3060361ba867e35cb49e3d82ff70b.jpg",
      disponibilidad: true
    },

    {
      id: 11,
      nombre: "kate spade bag",
      descripcion: "color: beige",
      precio: 70000,
      imagen: "https://i.pinimg.com/736x/eb/f0/45/ebf045568bd645b18626edc7cb0d8fd1.jpg",
      disponibilidad: true
    },

    {
      id: 12,
      nombre: "dior handbag",
      descripcion: "color: beige",
      precio: 70000,
      imagen: "https://i.pinimg.com/736x/8e/f0/84/8ef0844c63a8476700b625a1ec6d9e33.jpg",
      disponibilidad: true
    },

    {
      id: 13,
      nombre: "dior bag",
      descripcion: "color: beige",
      precio: 70000,
      imagen: "https://i.pinimg.com/736x/68/1a/a7/681aa7f21b21605596a88ba849a0168d.jpg",
      disponibilidad: true
    },

    {
      id: 14,
      nombre: "miu miu bag",
      descripcion: "color: beige",
      precio: 70000,
      imagen: "https://i.pinimg.com/736x/03/04/58/03045868a7e73a05370cb2d4a34af7f1.jpg",
      disponibilidad: true
    },

    {
      id: 15,
      nombre: "miu miu bag",
      descripcion: "color: beige",
      precio: 70000,
      imagen: "https://i.pinimg.com/736x/7c/12/3f/7c123f4f6384b6d9280df917ac68472e.jpg",
      disponibilidad: true
    },

    {
      id: 16,
      nombre: "",
      descripcion: "color: beige",
      precio: 70000,
      imagen: "https://i.pinimg.com/736x/5c/c8/db/5cc8db5ced5dc9b1987ef4c7ada7c3ca.jpg",
      disponibilidad: true
    },

    {
      id: 17,
      nombre: "",
      descripcion: "color: beige",
      precio: 70000,
      imagen: "https://i.pinimg.com/736x/5c/12/9f/5c129fee7a5ff50e8208f9ed44442d28.jpg",
      disponibilidad: true
    },

    {
      id: 18,
      nombre: "",
      descripcion: "color: beige",
      precio: 70000,
      imagen: "https://i.pinimg.com/736x/90/ac/e9/90ace91e9138ef31b99c66cb148c90ef.jpg",
      disponibilidad: true
    },

    {
      id: 19,
      nombre: "",
      descripcion: "color: beige",
      precio: 70000,
      imagen: "https://i.pinimg.com/736x/46/39/1c/46391c3a37cf00a8c6f890511b08febc.jpg",
      disponibilidad: true
    },

    {
      id: 20,
      nombre: "",
      descripcion: "color: beige",
      precio: 70000,
      imagen: "https://i.pinimg.com/736x/12/42/4f/12424f12c064fd36c3692a745fb86394.jpg",
      disponibilidad: true
    },
  ]
  constructor(private carritoService: CarritoService) { }
  //metodo para agregar un producto 
  agregar(producto: Producto) {
    this.carritoService.agregarAlcarrito(producto)
    alert("Producto agregado al carrito")
  }
}
