import {Routes , RouterModule} from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ProductosComponent } from './productos/productos.component';
import { FacturaComponent } from './factura/factura.component';
import { PageComponent } from './page.component';


const pageRoutes: Routes = [
  {path: 'pages', component: PageComponent,
   children: [

  {path: 'inicio', component: InicioComponent},
  {path: 'empleado', component: EmpleadoComponent},
  {path: 'cliente', component: ClienteComponent},
  {path: 'producto', component: ProductosComponent},
  {path: 'factura', component: FacturaComponent},

   {path: '**', component: InicioComponent},


]}

];

export const PAGE_ROUTES =  RouterModule.forRoot(pageRoutes, { useHash: true});
