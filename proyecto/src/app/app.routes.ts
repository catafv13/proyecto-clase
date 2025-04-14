import { RedirectCommand, Routes } from '@angular/router';
import path from 'node:path';
import { InicioComponent } from "./paginas/inicio/inicio.component";
import { CarritoComponent } from "./paginas/carrito/carrito.component";
import { QuienesomosComponent } from "./paginas/quienesomos/quienesomos.component";
import { OfertasComponent } from "./paginas/ofertas/ofertas.component";
import { ProductoComponent } from "./paginas/producto/producto.component";
import { ContactoComponent } from './paginas/contacto/contacto.component';

export const routes: Routes = [
    {path:"", redirectTo:"/inicio", pathMatch:"full"},
    {path:'contacto',component:ContactoComponent},
    {path:"producto", component:ProductoComponent},
    {path:'inicio',component:InicioComponent},
    {path:'carrito',component:CarritoComponent},
    {path:'quienesomos',component:QuienesomosComponent},
    {path:'ofertas',component:OfertasComponent}
];


