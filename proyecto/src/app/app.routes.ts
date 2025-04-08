import { RedirectCommand, Routes } from '@angular/router';
import path from 'node:path';
import { InicioComponent } from './inicio/inicio/inicio.component';
import { FormularioComponent } from './contacto/formulario/formulario.component';

export const routes: Routes = [
    {path:"", redirectTo:"/inicio", pathMatch:"full"},
    {path:"Inicio", component:InicioComponent},
    {path: "Contacto", component:FormularioComponent}
];
