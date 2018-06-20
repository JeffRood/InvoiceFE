import {Routes , RouterModule} from '@angular/router';
import { InicioComponent } from './Pages/inicio/inicio.component';
import { EmpleadoComponent } from './Pages/empleado/empleado.component';
import { ClienteComponent } from './Pages/cliente/cliente.component';
import { ProductosComponent } from './Pages/productos/productos.component';
import { FacturaComponent } from './Pages/factura/factura.component';


const appRoutes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'empleado', component: EmpleadoComponent},
  {path: 'cliente', component: ClienteComponent},
  {path: 'producto', component: ProductosComponent},
  {path: 'factura', component: FacturaComponent},
   {path: '**', component: InicioComponent},


];

export const APP_ROUTES =  RouterModule.forRoot(appRoutes, { useHash: true});
