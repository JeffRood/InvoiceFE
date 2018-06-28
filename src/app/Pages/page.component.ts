import { Component, OnInit } from '@angular/core';
import { ClienteService } from './cliente/cliente.service';
import { EmpleadoService } from './empleado/empleado.service';
import { ProductoService } from './productos/producto.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html'
})
export class PageComponent implements OnInit {

  constructor(public servicioEmpleado: EmpleadoService,
    public servicioCliente: ClienteService,
    public servicioProducto: ProductoService,
  ) { }

  ngOnInit(
    ) {
      this.servicioProducto.GetProduct();
    this.servicioEmpleado.GetEmployee();
this.servicioCliente.GetClient();
  }

}
