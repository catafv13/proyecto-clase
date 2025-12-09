import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../servicios/product.service';
import { CarritoService } from '../../servicios/carrito.service';
import { FavoritosService } from '../../servicios/favoritos.service';
import { Producto } from '../../model/producto.model';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  productos: Producto[] = [];
  cargando = true;
  error = '';

  //Variables para el toast de notificación
  mostrarAlerta = false;
  mensajeAlerta = '';

  constructor(
    private productService: ProductService,
    private carritoService: CarritoService,
    private favoritosService: FavoritosService
  ) { }

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.productService.obtenerProductos().subscribe({
      next: (res: any) => {
        this.productos = res;
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error al cargar productos:', err);
        this.error = 'No se pudieron cargar los productos.';
        this.cargando = false;
      }
    });
  }

  // Método actualizado con notificación visual
  agregarAlCarrito(producto: Producto): void {
    this.carritoService.agregarAlCarrito(producto).subscribe({
      next: () => {
        console.log('Producto agregado al carrito');
        this.mostrarAlerta = true;
        this.mensajeAlerta = 'Agregado al carrito';
        // Ocultar después de 3 segundos
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

  // ✨ Método con toast al agregar a favoritos
  agregarAFavoritos(producto: Producto): void {
    this.favoritosService.agregarFavorito(producto).subscribe({
      next: () => {
        this.mostrarAlerta = true;
        this.mensajeAlerta = 'Producto agregado a favoritos';
        setTimeout(() => {
          this.mostrarAlerta = false;
        }, 3000);
      },
      error: (err) => {
        console.error('Error al agregar a favoritos:', err);
        this.mostrarAlerta = true;
        this.mensajeAlerta = 'Error al agregar a favoritos';
        setTimeout(() => {
          this.mostrarAlerta = false;
        }, 3000);
      }
    });
  }
}