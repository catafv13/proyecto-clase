import { Routes } from '@angular/router';
import { InicioComponent } from "./paginas/inicio/inicio.component";
import { CarritoComponent } from "./paginas/carrito/carrito.component";
import { QuienesomosComponent } from "./paginas/quienesomos/quienesomos.component";
import { ProductoComponent } from "./paginas/producto/producto.component";
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { FavoritosComponent } from './paginas/favoritos/favoritos.component';
import { InicioSesionComponent } from './paginas/perfil/inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './paginas/perfil/registro/registro.component';
import { AdminComponent } from './paginas/admin/admin.component';
import { AdminGuard } from './guards/admin.guards';


export const routes: Routes = [
    { path: "", redirectTo: "/inicio", pathMatch: "full" },
    { path: 'contacto', component: ContactoComponent },
    { path: "producto", component: ProductoComponent },
    { path: 'inicio', component: InicioComponent },
    { path: 'carrito', component: CarritoComponent },
    { path: 'quienesomos', component: QuienesomosComponent },
    { path: 'favoritos', component: FavoritosComponent },
    { path: 'inicio-sesion', component: InicioSesionComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'admin/productos', redirectTo: 'productos'},
    {
        path: 'ticket/:id',
        loadComponent: () =>
            import('./paginas/ticket/ticket.component')
                .then(m => m.TicketComponent)
    },

    // -----------------------------------------------------------
    // Panel de administración
    // Está protegido por AdminGuard → solo usuario con rol "admin"
    // puede acceder.
    // Si no es admin, se redirige a /inicio-sesion (login)
    // -----------------------------------------------------------
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AdminGuard]
    },

];


