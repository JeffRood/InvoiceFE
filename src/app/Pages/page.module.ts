import { FacturaDetail } from './factura/factura.modelo';
import { HeaderComponent } from '../shared/header/header.component';
import { FacturaComponent } from './factura/factura.component';
import { ProductosComponent } from './productos/productos.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// RUTAS!!!


// MODULOS!!!

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { EmpleadoComponent } from './empleado/empleado.component';
import { InicioComponent } from './inicio/inicio.component';
import { ClienteComponent } from './cliente/cliente.component';
import { PAGE_ROUTES } from './page.route';
import { PageComponent } from './page.component';





// SERVICIOS!!!
// ESTAN IMPORTADOS EN MODULOS
// COMPONENTES!!




// Shared Compartidos



// rutas


@NgModule({
  declarations: [
ProductosComponent,
FacturaComponent,
EmpleadoComponent,
InicioComponent,
ClienteComponent,
PageComponent,
HeaderComponent


  ],
  imports: [
    BrowserModule,
    PAGE_ROUTES,
     FormsModule,
    ReactiveFormsModule,

  ],
  providers: [

  ],

})
export class PageModule { }
