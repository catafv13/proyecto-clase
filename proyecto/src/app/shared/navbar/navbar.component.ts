import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { CarritoService } from '../../servicios/carrito.service';
import { Producto } from '../../model/producto.model';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  cantidadProductos: number = 0;

  constructor(private carritoService: CarritoService) { }
  ngOnInit(): void {
    //escucha los cambios en el carrito par actualizar la cantidad de productos
    this.carritoService.carrito$.subscribe((productos: { producto: Producto, cantidad: number }[]) => {
      this.cantidadProductos= productos.reduce((total, item) => total + item.cantidad, 0)
    })
  }

  onCarritoClick(){
    console.log("carrito clicked")
  }

  cambiarFondo(){
    let toggle: HTMLInputElement | null= document.getElementById("toggle") as HTMLInputElement
    let label_toggle: HTMLInputElement | null = document.getElementById("label_toggle") as HTMLInputElement
    if (toggle) {
      let checked: boolean = toggle.checked;
      document.body.classList.toggle("dark", checked)
    
      if (checked) {
        label_toggle!.innerHTML = '<i class = "fa-solid fa-sun"></i>';
      }else{
        label_toggle!.innerHTML = '<i class = "fa-solid fa-moon"></i>'
      }
    }
  }
  
}

