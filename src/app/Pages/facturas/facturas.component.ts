import { Component, OnInit } from '@angular/core';
import { FacturaService } from '../facturar/factura.service';
import { Factura } from '../facturar/factura.modelo';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html'
})
export class FacturasComponent implements OnInit {
   Lista_Factura: any;
  constructor( public servicio: FacturaService) { }

  ngOnInit() {
  this.servicio.obtenerFactura().subscribe(data => {
   this.Lista_Factura = data;
  });
  }

  Detalle(invoiceID: number) {
    console.log(invoiceID);


  }

}
