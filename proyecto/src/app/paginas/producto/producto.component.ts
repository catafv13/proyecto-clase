import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../servicios/product.service';
import { CarritoService } from '../../servicios/carrito.service';
import { FavoritosService } from '../../servicios/favoritos.service';
import { Producto } from '../../model/producto.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  // Lista de productos obtenidos desde el backend.
  productos: Producto[] = [];

  // Estado para mostrar un spinner o mensaje de carga.
  cargando = true;

  // Texto para mostrar un error en la interfaz si algo falla.
  error = '';

  constructor(
    // Servicio encargado de obtener productos desde el backend.
    private productService: ProductService,

    // Servicio responsable de agregar productos al carrito y manejar su estado.
    private carritoService: CarritoService,

    // Servicio encargado de gestionar los productos favoritos del usuario.
    private favoritosService: FavoritosService
  ) { }

  // Método del ciclo de vida, se ejecuta al inicializar el componente.
  ngOnInit(): void {
    this.cargarProductos(); // Carga inicial de productos.
  }

  // Solicita al backend la lista completa de productos.
  cargarProductos(): void {
    this.productService.obtenerProductos().subscribe({

      // Si la petición es exitosa:
      next: (res: any) => {
        this.productos = res;    // Se asigna la lista recibida.
        this.cargando = false;   // Finaliza el estado de carga.
      },

      // Si ocurre un error:
      error: (err) => {
        console.error('Error al cargar productos:', err);
        this.error = 'No se pudieron cargar los productos.'; // Mensaje visible al usuario.
        this.cargando = false;
      }
    });
  }

  // Agrega un producto al carrito llamando al servicio correspondiente.
  agregarAlCarrito(producto: Producto): void {
    this.carritoService.agregarAlCarrito(producto).subscribe({
      next: () => console.log('Producto agregado'),
      error: err => console.error(err)
    });
  }

  // Agrega un producto a la lista de favoritos del usuario.
  agregarAFavoritos(producto: Producto): void {
    this.favoritosService.agregarFavorito(producto).subscribe({
      next: () => console.log('Agregado'),
      error: (err) => console.error(err)
    });
  }



}
