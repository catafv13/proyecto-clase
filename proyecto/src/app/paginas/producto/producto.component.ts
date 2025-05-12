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
    {
    id: 1,
    nombre: "hoodie russell vintage",
    descripcion: "color: azul",
    precio: 100000,
    imagen: "https://i.pinimg.com/736x/7d/7d/01/7d7d01b921ccca4a9934b8955fbb2609.jpg",
    disponibilidad: true
    }, 

    {
      id: 2,
      nombre: "hoodie russell vintage",
      descripcion: "color: amarillo",
      precio: 100000,
      imagen: "https://i.pinimg.com/736x/59/e5/75/59e575d01ddb37e44e2b3974b4d7d323.jpg",
      disponibilidad: true
      },

      {
        id: 3,
        nombre: "hoodie russell vintage",
        descripcion: "color: rosa chicle",
        precio: 100000,
        imagen: "https://i.pinimg.com/736x/61/bd/4e/61bd4e8db2d81b3b998987d54ed8c4b4.jpg",
        disponibilidad: true
        },

        {
          id: 4,
          nombre: "hoodie russell vintage",
          descripcion: "color: beige",
          precio: 100000,
          imagen: "https://i.pinimg.com/736x/09/d5/eb/09d5eb8fa9dd49f513940e4a9f683735.jpg",
          disponibilidad: true
          },

          {
            id: 5,
            nombre: "hoodie russell vintage",
            descripcion: "color: marrón chocolate",
            precio: 100000,
            imagen: "https://i.pinimg.com/736x/e0/15/67/e01567b51040368ab86992e6166ec332.jpg",
            disponibilidad: true
            },

            {
              id: 6,
              nombre: "hoodie russell vintage",
              descripcion: "color: verde inglés",
              precio: 100000,
              imagen: "https://i.pinimg.com/736x/4f/a2/9b/4fa29b0bf77d6550ed04ed971211dd7e.jpg",
              disponibilidad: true
              },

              {
                id: 7,
                nombre: "hoodie russell vintage",
                descripcion: "color: azul marino",
                precio: 100000,
                imagen: "https://i.pinimg.com/736x/61/f4/ad/61f4add5b87f0f4c04948b6da40ed8f3.jpg",
                disponibilidad: true
                },

                {
                  id: 8,
                  nombre: "hoodie russell vintage",
                  descripcion: "color: bordó",
                  precio: 100000,
                  imagen: "https://i.pinimg.com/736x/f2/57/bd/f257bde1412ed1f97a417499914ba19a.jpg",
                  disponibilidad: true
                  },
  ]
  constructor(private carritoService: CarritoService) {}
  //metodo para agregar un producto 
  agregar(producto: Producto){
    this.carritoService.agregarAlcarrito(producto)
    alert("Producto agregado al carrito")
  }
}
