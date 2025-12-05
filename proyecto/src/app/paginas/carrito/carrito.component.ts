import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Producto } from '../../model/producto.model';
import { CarritoService } from '../../servicios/carrito.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  productosEnCarrito: { producto: Producto; cantidad: number }[] = [];
  
  // agregado p
  envio: number = 1500;
  total: number = 0;

  constructor(
    private carritoService: CarritoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.carritoService.carrito$.subscribe(productos => {
      this.productosEnCarrito = productos;
      this.calcularTotal();
    });
  }

  agregarCantidad(index: number) {
    this.productosEnCarrito[index].cantidad++;
    this.carritoService.actualizarCarrito(this.productosEnCarrito);
    this.calcularTotal();
  }

  quitarCantidad(index: number) {
    if (this.productosEnCarrito[index].cantidad > 1) {
      this.productosEnCarrito[index].cantidad--;
      this.carritoService.actualizarCarrito(this.productosEnCarrito);
      this.calcularTotal();
    }
  }

  eliminarProducto(productoId: number) {
    this.carritoService.eliminarDelCarrito(productoId);
    this.calcularTotal();
  }

  vaciarCarrito() {
    this.carritoService.vaciarCarrito();
    this.total = 0;
  }

  realizarCompra() {
    alert("Compra realizada con éxito");
    this.vaciarCarrito();
    this.router.navigate(['/compra']);
  }

  irAFormularioCompra() {
    this.router.navigate(['/compra']);
  }

  calcularTotal() {
    this.total = this.productosEnCarrito.reduce((sum, item) =>
      sum + item.producto.precio * item.cantidad, 0
    );
  }
}

