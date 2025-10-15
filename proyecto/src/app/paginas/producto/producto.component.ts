import { CommonModule} from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarritoService } from '../../servicios/carrito.service';
import { Producto } from '../../model/producto.model';
import { FavoritosService } from '../../servicios/favoritos.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-producto',
  imports: [CommonModule, RouterModule,FormsModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {

  //arreglo de objetos, guarda todos los productos que se van a mostrar
  productos: Producto[] = [
    {
      id: 1,
      nombre: "COLLAR BADDIE",
      descripcion: "",
      precio: 36000,
      imagen: "https://acdn-us.mitiendanube.com/stores/026/606/products/283-07fe3c5228291833a217530207390565-1024-1024.webp",
      disponibilidad: true, 
      marca: "LITHIUM",
      categoria: "collar"
    },

    {
      id: 2,
      nombre: "AROS GALLERY WALL (PAR)",
      descripcion: "",
      precio: 36000,
      imagen: "https://acdn-us.mitiendanube.com/stores/026/606/products/406-643c65fc52b35ddde017502913355945-1024-1024.webp",
      disponibilidad: true, 
      marca: "LITHIUM",
      categoria: "aros"
    },

    {
      id: 3,
      nombre: "AROS FAIRY (PAR)",
      descripcion: "",
      precio: 29000,
      imagen: "https://acdn-us.mitiendanube.com/stores/026/606/products/113-8dec2fd7f6cdae686f17476672210946-1024-1024.webp",
      disponibilidad: true,
      marca: "LITHIUM",
      categoria: "aros"
    },

    {
      id: 4,
      nombre: "COLLAR MOROCCO",
      descripcion: "",
      precio: 16000,
      imagen: "https://acdn-us.mitiendanube.com/stores/026/606/products/342-6476b4c58c93a4700717481905514232-1024-1024.webp",
      disponibilidad: true,
      marca: "LITHIUM",
      categoria: "collar"
    },

    {
      id: 5,
      nombre: "COLLAR EVERLASTING",
      descripcion: "",
      precio: 26000,
      imagen: "https://acdn-us.mitiendanube.com/stores/026/606/products/114-3-4fa6bf182aa3a2d37717481902032102-1024-1024.webp",
      disponibilidad: true,
      marca: "LITHIUM",
      categoria: "collar"
    },

    {
      id: 6,
      nombre: "ARO BUBBLEGUM (UNIDAD)",
      descripcion: "",
      precio: 17000,
      imagen: "https://acdn-us.mitiendanube.com/stores/026/606/products/85-3-e6690f119fbb9b980017475825458516-1024-1024.webp",
      disponibilidad: true,
      marca: "LITHIUM",
      categoria: "aros"
    },

    {
      id: 7,
      nombre: "CHOKER BRAT",
      descripcion: "",
      precio: 20000,
      imagen: "https://acdn-us.mitiendanube.com/stores/026/606/products/225-e1cfd1578e8175ae9d17481890698696-1024-1024.webp",
      disponibilidad: true,
      marca: "LITHIUM",
      categoria: "collar"
    },

    {
      id: 8,
      nombre: "TOBILLERA RORY",
      descripcion: "",
      precio: 16000,
      imagen: "https://acdn-us.mitiendanube.com/stores/026/606/products/102-964ab724ac9e147f6f17476632552699-1024-1024.webp",
      disponibilidad: true,
      marca: "LITHIUM",
      categoria: "tobillera"
    },

    /*carteras */
    {
      id: 9,
      nombre: "ARO ROSY CHEEKS",
      descripcion: "",
      precio: 21000,
      imagen: "https://acdn-us.mitiendanube.com/stores/026/606/products/326-b81d388031844b8baf17475820551984-1024-1024.webp",
      disponibilidad: true,
      marca: "LITHIUM",
      categoria: "aros"
    },

    {
      id: 10,
      nombre: "ANILLO GLAMOUR GOSSIP",
      descripcion: "",
      precio: 21000,
      imagen: "https://acdn-us.mitiendanube.com/stores/026/606/products/283-6bb1b890087adc8e9217476601307036-1024-1024.webp",
      disponibilidad: true,
      marca: "LITHIUM",
      categoria: "anillo"
    },

    {
      id: 11,
      nombre: "ARO BRITT (UNIDAD)",
      descripcion: "",
      precio: 17000,
      imagen: "https://acdn-us.mitiendanube.com/stores/026/606/products/184-2-fa224a8d236a5ef8c717475765971977-1024-1024.webp",
      disponibilidad: true,
      marca: "LITHIUM",
      categoria: "aros"
    },

    {
      id: 12,
      nombre: "AROS KATE (PAR)",
      descripcion: "",
      precio: 29000,
      imagen: "https://acdn-us.mitiendanube.com/stores/026/606/products/194-2-a8893534cb24acfbf117476665674196-1024-1024.webp",
      disponibilidad: true,
      marca: "LITHIUM",
      categoria: "aros"
    },

    {
      id: 13,
      nombre: "AROS HYPNOTIZE (PAR)",
      descripcion: "",
      precio: 12000,
      imagen: "https://acdn-us.mitiendanube.com/stores/026/606/products/246-70b62e4524e984807e17476658338473-1024-1024.webp",
      disponibilidad: true,
      marca: "LITHIUM",
      categoria: "aros"
    },

    {
      id: 14,
      nombre: "PULSERA ELLE",
      descripcion: "",
      precio: 29000,
      imagen: "https://acdn-us.mitiendanube.com/stores/026/606/products/171-2-3c38d16d20f71c107617476035452077-1024-1024.webp",
      disponibilidad: true,
      marca: "LITHIUM",
      categoria: "pulsera"
    },

    {
      id: 15,
      nombre: "AROS COCKTAIL (PAR)",
      descripcion: "",
      precio: 18000,
      imagen: "https://acdn-us.mitiendanube.com/stores/026/606/products/142-2-0789fe074d0d79796817476657255072-1024-1024.webp",
      disponibilidad: true,
      marca: "LITHIUM",
      categoria: "aros"
    },

    {
      id: 16,
      nombre: "ARO FEMME FATALE",
      descripcion: "",
      precio: 17000,
      imagen: "https://acdn-us.mitiendanube.com/stores/026/606/products/118-3-b6a634f0bad2a9367217475806351202-1024-1024.webp",
      disponibilidad: true,
      marca: "LITHIUM",
      categoria: "aros"
    },

    {
      id: 17,
      nombre: "COLLAR COZY",
      descripcion: "",
      precio: 22000,
      imagen: "https://acdn-us.mitiendanube.com/stores/026/606/products/252-a346b79002944c116d17481867325697-1024-1024.webp",
      disponibilidad: true,
      marca: "LITHIUM",
      categoria: "collar"
    },

    {
      id: 18,
      nombre: "CHOKER TEARS",
      descripcion: "",
      precio: 22000,
      imagen: "https://acdn-us.mitiendanube.com/stores/026/606/products/331-def176bb13c4e1122317481911907750-1024-1024.webp",
      disponibilidad: true,
      marca: "LITHIUM",
      categoria: "collar"
    },

    {
      id: 19,
      nombre: "ANILLO CAPRI",
      descripcion: "",
      precio: 18000,
      imagen: "https://acdn-us.mitiendanube.com/stores/026/606/products/266-a664594902cdc383f317508841986007-1024-1024.webp",
      disponibilidad: true,
      marca: "LITHIUM",
      categoria: "anillo"
    },

    {
      id: 20,
      nombre: "DIJE DREAM DUST",
      descripcion: "",
      precio: 14000,
      imagen: "https://acdn-us.mitiendanube.com/stores/026/606/products/177-2-4adea23c6ee8217a7317476037482908-1024-1024.webp",
      disponibilidad: true,
      marca: "LITHIUM",
      categoria: "dije"
    },

    {
      id: 21,
      nombre: "ARO CREMÉ (UNIDAD)",
      descripcion: "",
      precio: 17000,
      imagen: "https://acdn-us.mitiendanube.com/stores/026/606/products/309-c8947a8c6fd5fe51d117475837624517-1024-1024.webp",
      disponibilidad: true,
      marca: "LITHIUM",
      categoria: "aros"
    },

    {
      id: 22,
      nombre: "ANILLO FORMENTERA",
      descripcion: "",
      precio: 18000,
      imagen: "https://acdn-us.mitiendanube.com/stores/026/606/products/279-3d454588f1214a760a17476600490366-1024-1024.webp",
      disponibilidad: true,
      marca: "LITHIUM",
      categoria: "anillo"
    },

    {
      id: 23,
      nombre: "ANILLO MYSTIFY",
      descripcion: "",
      precio: 18000,
      imagen: "https://acdn-us.mitiendanube.com/stores/026/606/products/39-0c45da8c95de8c923e17476593813089-1024-1024.webp",
      disponibilidad: true,
      marca: "LITHIUM",
      categoria: "anillo"
    },

    {
      id: 24,
      nombre: "AROS KATE MINI (PAR)",
      descripcion: "",
      precio: 25000,
      imagen: "https://acdn-us.mitiendanube.com/stores/026/606/products/233-6165a69639a969e8bc17476667182078-1024-1024.webp",
      disponibilidad: true,
      marca: "LITHIUM",
      categoria: "aros"
    },

    {
      id: 25,
      nombre: "COLLAR OCEAN BREEZE",
      descripcion: "",
      precio: 26000,
      imagen: "https://acdn-us.mitiendanube.com/stores/026/606/products/116-3-83745634d000d8347317481904628989-1024-1024.webp",
      disponibilidad: true,
      marca: "LITHIUM",
      categoria: "collar"
    },

    {
      id: 26,
      nombre: "HANDPIECE CHANDELIER",
      descripcion: "",
      precio: 25000,
      imagen: "https://acdn-us.mitiendanube.com/stores/026/606/products/351-13012760fdff033aa417475860438114-1024-1024.webp",
      disponibilidad: true,
      marca: "LITHIUM",
      categoria: "pulsera"
    },

    {
      id: 27,
      nombre: "AROS MARIE (PAR)",
      descripcion: "",
      precio: 19000,
      imagen: "https://acdn-us.mitiendanube.com/stores/026/606/products/94-3-e3cce368f6b4c5bce017476674926905-1024-1024.webp",
      disponibilidad: true,
      marca: "LITHIUM",
      categoria: "aros"
    },

    {
      id: 28,
      nombre: "ARO BRANDY (UNIDAD)",
      descripcion: "",
      precio: 17000,
      imagen: "https://acdn-us.mitiendanube.com/stores/026/606/products/141-2-7887355b3dde0814f817475767574395-1024-1024.webp",
      disponibilidad: true,
      marca: "LITHIUM",
      categoria: "aros"
    },

     {
      id: 29,
      nombre: "COLLAR LUCKY ME",
      descripcion: "",
      precio: 28000,
      imagen: "https://acdn-us.mitiendanube.com/stores/026/606/products/478-5e6cef00113f121b5117589152614746-1024-1024.webp",
      disponibilidad: true,
      marca: "LITHIUM",
      categoria: "collar"
    },

     {
      id: 30,
      nombre: "ANILLO THE WINNER",
      descripcion: "",
      precio: 24000,
      imagen: "https://acdn-us.mitiendanube.com/stores/026/606/products/488-d0d506af69adc9f91f17589095041808-1024-1024.webp",
      disponibilidad: true,
      marca: "LITHIUM",
      categoria: "anillo"
    },

     {
      id: 30,
      nombre: "ANILLO MAKE A WISH",
      descripcion: "",
      precio: 24000,
      imagen: "https://acdn-us.mitiendanube.com/stores/026/606/products/482-3c2abaff0371b25e4917589093802303-1024-1024.webp",
      disponibilidad: true,
      marca: "LITHIUM",
      categoria: "anillo"
    },

     {
      id: 31,
      nombre: "BANGLE OPALITE ",
      descripcion: "",
      precio: 31000,
      imagen: "https://acdn-us.mitiendanube.com/stores/026/606/products/169-2-e45ac4e151f650345c17475861380872-1024-1024.webp",
      disponibilidad: true,
      marca: "LITHIUM",
      categoria: "pulsera"
    },

     {
      id: 32,
      nombre: " RELICARIO THE HEART",
      descripcion: "",
      precio: 31000,
      imagen: "https://acdn-us.mitiendanube.com/stores/026/606/products/301-4a22dc85d27173271917543530165789-1024-1024.webp",
      disponibilidad: true,
      marca: "LITHIUM",
      categoria: "collar"
    },


  ]

  //usa estas dependencias para llamar a los servicios
  constructor(private carritoService: CarritoService,
    private favoritosService: FavoritosService
  ) { }

  //metodo para agregar un producto 
  //recibe un producto como parametro, llama al metodo del carritoservice para agregarlo al carrito y lo actualiza
  agregarAlCarrito(producto: Producto) {
    this.carritoService.agregarAlcarrito(producto)
  }

  //llama al metodo del favoritosservice para agregarlo a la lista de favoritos y muestra un alert como confirmación al usuario. 
  agregarAFavoritos(producto: Producto) {
    this.favoritosService.agregarAFavoritos(producto)
    alert("Producto agregado a favoritos")
  }

  searchTerm: string = '';
  selectedCategory: string = '';
  selectedBrand: string = '';
  minPrecio: number | null = null;
  maxPrecio: number | null = null;


  get categories(): string[] {
    return [...new Set(this.productos.map(p => p.categoria))]
  }
  get marca(): string[] {
    return [...new Set(this.productos.map(p => p.marca))]
  }
  onSearch(event: Event): void {
    event.preventDefault();
  }

resetFilters():void {
  this.searchTerm = '',
    this.selectedCategory = '',
    this.selectedBrand = '',
    this.minPrecio = null,
    this.maxPrecio = null
}
  
  get filteredProducts(): Producto[] {
  return this.productos.filter(p => (
    this.searchTerm === '' || p.nombre.toLocaleLowerCase().includes(this.searchTerm.toLocaleLowerCase())) &&
    (this.selectedCategory === '' || p.categoria === this.selectedCategory) &&
    (this.selectedBrand === '' || p.marca === this.selectedBrand) &&
    (this.minPrecio === null || p.precio >= this.minPrecio) &&
    (this.maxPrecio === null || p.precio <= this.maxPrecio))
}
}

