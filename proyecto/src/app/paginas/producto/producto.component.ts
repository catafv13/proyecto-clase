import { CommonModule, NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarritoService } from '../../servicios/carrito.service';
import { Producto } from '../../model/producto.model';
import { FavoritosService } from '../../favoritos.service';

@Component({
  selector: 'app-producto',
  imports: [CommonModule, RouterModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {

  productos:Producto[] = [
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
      nombre: "ralph lauren bag",
      descripcion: "color: beige",
      precio: 70000,
      imagen: "https://i.pinimg.com/736x/46/39/1c/46391c3a37cf00a8c6f890511b08febc.jpg",
      disponibilidad: true
    },

    {
      id: 10,
      nombre: "coach bag",
      descripcion: "color: marrón",
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
      imagen: "https://i.pinimg.com/736x/2d/39/df/2d39df31a00fad4523d2a766c9e9b1ee.jpg",
      disponibilidad: true
    },

    {
      id: 14,
      nombre: "ysl bag",
      descripcion: "color: marrón claro",
      precio: 70000,
      imagen: "https://i.pinimg.com/736x/28/d8/0c/28d80c0c66f1e2bbe9b9fcfd84b17634.jpg",
      disponibilidad: true
    },

    {
      id: 15,
      nombre: "coach bag",
      descripcion: "color: marrón",
      precio: 70000,
      imagen: "https://i.pinimg.com/736x/e3/1b/e8/e31be85009aa52dfa7fb5f52d0a999f4.jpg",
      disponibilidad: true
    },

    {
      id: 16,
      nombre: "ferragamo bag",
      descripcion: "color: marrón",
      precio: 70000,
      imagen: "https://i.pinimg.com/736x/74/09/d0/7409d0eefbaba35f05608e9851ddd559.jpg",
      disponibilidad: true
    },

    {
      id: 17,
      nombre: "chloe 99 bag",
      descripcion: "color: marrón",
      precio: 70000,
      imagen: "https://i.pinimg.com/736x/42/4d/b3/424db341d236832effea3cb95de67feb.jpg",
      disponibilidad: true
    },

    {
      id: 18,
      nombre: "coach bag",
      descripcion: "color: marrón",
      precio: 70000,
      imagen: "https://i.pinimg.com/736x/fb/f8/9a/fbf89a52abf05f459a039584d27a36a8.jpg",
      disponibilidad: true
    },

    {
      id: 19,
      nombre: "fiorentina bag",
      descripcion: "color: negro",
      precio: 70000,
      imagen: "https://i.pinimg.com/736x/57/ea/ed/57eaedd4895504f6360a748c56495c4d.jpg",
      disponibilidad: true
    },

    {
      id: 20,
      nombre: "elise bag",
      descripcion: "color: marrón",
      precio: 70000,
      imagen: "https://i.pinimg.com/736x/98/fc/a7/98fca7c1b43d9b7ce6eecb129e7dc5ee.jpg",
      disponibilidad: true
    },

    /*zapatillas */
    {
      id: 21,
      nombre: "adidas spezial",
      descripcion: "color: azul y rosa",
      precio: 70000,
      imagen: "https://i.pinimg.com/736x/ee/45/c2/ee45c24fba344daaeb2973155ac37f9b.jpg",
      disponibilidad: true
    },

    {
      id: 22,
      nombre: "campus 00s",
      descripcion: "color: beige y azul",
      precio: 70000,
      imagen: "https://i.pinimg.com/736x/df/c3/a1/dfc3a14e3e6f47eafd6b24cb91a92ce8.jpg",
      disponibilidad: true
    },

    {
      id: 22,
      nombre: "adidas forum low",
      descripcion: "color: beige y rojo",
      precio: 70000,
      imagen: "https://i.pinimg.com/736x/7f/9e/50/7f9e50484753cda6837c1003db70dd31.jpg",
      disponibilidad: true
    },

    {
      id: 22,
      nombre: "adidas campus",
      descripcion: "color: negro",
      precio: 70000,
      imagen: "https://i.pinimg.com/736x/7e/d7/9f/7ed79fac4be723325f3077dcd7ca86e6.jpg",
      disponibilidad: true
    },

    {
      id: 22,
      nombre: "adidas gazelle",
      descripcion: "color: rosa",
      precio: 70000,
      imagen: "https://i.pinimg.com/736x/13/e7/5a/13e75add66ffa29bc9b57250c693e92e.jpg",
      disponibilidad: true
    },

    {
      id: 22,
      nombre: "adidas gazelle",
      descripcion: "color: celeste y blanco",
      precio: 70000,
      imagen: "https://i.pinimg.com/736x/12/95/60/129560af06407e5b0cc1493306c72a26.jpg",
      disponibilidad: true
    },

    {
      id: 22,
      nombre: "adidas campus",
      descripcion: "color: gris",
      precio: 70000,
      imagen: "https://i.pinimg.com/736x/12/1a/fc/121afc1a763c228d879feb325f9d3c8c.jpg",
      disponibilidad: true
    },

    {
      id: 22,
      nombre: "adidas spezial",
      descripcion: "color: azul y rosa",
      precio: 70000,
      imagen: "",
      disponibilidad: true
    },

    {
      id: 22,
      nombre: "adidas spezial",
      descripcion: "color: azul y rosa",
      precio: 70000,
      imagen: "",
      disponibilidad: true
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
