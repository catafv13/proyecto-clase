import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Producto } from '../../model/producto.model';
import { CarritoService } from '../../servicios/carrito.service';
import { ProductService } from '../../servicios/product.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  producto: Producto[] = [];
  cargando = true;
  error: string | null = null;

  // Variables para el toast (iguales que en productos)
  mostrarAlerta = false;
  mensajeAlerta = '';

  constructor(
    private carritoService: CarritoService,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.cargando = true;
    this.error = null;
    this.productService.obtenerProductos().subscribe({
      next: (productos) => {
        this.producto = productos;
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error al cargar productos:', err);
        this.error = 'No se pudieron cargar los productos.';
        this.cargando = false;
      }
    });
  }

  //Método con toast al agregar al carrito
  agregarAlCarrito(producto: Producto): void {
    this.carritoService.agregarAlCarrito(producto).subscribe({
      next: () => {
        this.mostrarAlerta = true;
        this.mensajeAlerta = 'Agregado al carrito';
        setTimeout(() => {
          this.mostrarAlerta = false;
        }, 3000);
      },
      error: (err) => {
        console.error('Error al agregar al carrito:', err);
        this.mostrarAlerta = true;
        this.mensajeAlerta = 'Error al agregar el producto';
        setTimeout(() => {
          this.mostrarAlerta = false;
        }, 3000);
      }
    });
  }

}