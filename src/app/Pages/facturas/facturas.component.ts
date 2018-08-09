import { Component, OnInit } from '@angular/core';
import { FacturaService } from '../facturar/factura.service';
import { Factura, IFactura2, FacturaDetalle } from '../facturar/factura.modelo';


@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html'
})

export class FacturasComponent implements OnInit {
   Lista_Factura: IFactura2;
   Detalle_Factura: FacturaDetalle;
   dia = Date();
  constructor( public servicio: FacturaService) { }

  ngOnInit() {
  this.servicio.obtenerFactura().subscribe(data => {
   this.Lista_Factura = data as IFactura2;
  });
  }

  Detalle(invoiceID: number) {
    this.servicio.obtenerDetalleFactura(invoiceID).subscribe(data => {
      this.Detalle_Factura = data as FacturaDetalle;
    });
    console.log(this.Detalle_Factura);
  }
}
