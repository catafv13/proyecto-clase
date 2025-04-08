import { RedirectCommand, Routes } from '@angular/router';
import path from 'node:path';
import { InicioComponent } from './inicio/inicio/inicio.component';
import { FormularioComponent } from './contacto/formulario/formulario.component';
import { ProductoComponent } from './producto/producto/producto.component';

export const routes: Routes = [
    {path:"", redirectTo:"/producto", pathMatch:"full"},
    {path:"Inicio", component:InicioComponent},
    {path: "Contacto", component:FormularioComponent},
    {path: "producto", component:ProductoComponent}
];
