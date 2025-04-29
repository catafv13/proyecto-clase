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
    descripcion: "",
    precio: 100000,
    imagen: "https://i.pinimg.com/736x/7d/7d/01/7d7d01b921ccca4a9934b8955fbb2609.jpg",
    disponibilidad: true
    }, 

    {
      id: 2,
      nombre: "hoodie russell vintage",
      descripcion: "",
      precio: 100000,
      imagen: "https://i.pinimg.com/736x/59/e5/75/59e575d01ddb37e44e2b3974b4d7d323.jpg",
      disponibilidad: true
      },

      {
        id: 3,
        nombre: "hoodie russell vintage",
        descripcion: "",
        precio: 100000,
        imagen: "https://i.pinimg.com/736x/61/bd/4e/61bd4e8db2d81b3b998987d54ed8c4b4.jpg",
        disponibilidad: true
        },

        {
          id: 4,
          nombre: "hoodie russell vintage",
          descripcion: "",
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
