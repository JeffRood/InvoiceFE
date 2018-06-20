import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { InicioComponent } from './Pages/inicio/inicio.component';
import { EmpleadoComponent } from './Pages/empleado/empleado.component';
import { ClienteComponent } from './Pages/cliente/cliente.component';
import { ProductosComponent } from './Pages/productos/productos.component';
import { FacturaComponent } from './Pages/factura/factura.component';
import { APP_ROUTES } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [

    AppComponent,
    HeaderComponent,
    InicioComponent,
    EmpleadoComponent,
    ClienteComponent,
    ProductosComponent,
    FacturaComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
