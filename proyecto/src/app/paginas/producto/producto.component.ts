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
    nombre: "",
    descripcion: "",
    precio: 100000,
    imagen: "",
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
