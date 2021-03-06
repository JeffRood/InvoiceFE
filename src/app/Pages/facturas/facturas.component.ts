
import { Component, OnInit } from '@angular/core';
import { FacturaService } from '../facturar/factura.service';
import { Factura, IFactura2, FacturaDetalle, IAsiento, Item, IContabildad } from '../facturar/factura.modelo';
import { NgForm } from '@angular/forms';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html'
})

export class FacturasComponent implements OnInit {
   Lista_Factura: IFactura2;
   Detalle_Factura: FacturaDetalle;
   dia = Date();
item: Item;
id : number;

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

  contabilidad(form: NgForm) {
    let descripcion = form.value.Description;
   let date = this.dia;


   let asiento: IAsiento = {
    date: date,
    description:	descripcion,
    auxiliaryId: 3,
    status:	 1,
    currencyId:	1,
    exchangeRate:	1
   };






   Swal({
    title: 'Registar Asiento ?',
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Enviar!'
  }).then(registrar => {
    if (registrar.value) {

this.servicio.Contabilidad(asiento).subscribe(data => {
console.log(data);

this.item = data as Item;
this.id = this.item.id;
console.log(this.id);



let debito: IContabildad = {
  journalEntryId: this.id,
  accountId: 5,
   reference: 'Esta Cuenta reduce en Inventario y Mercancia',
   debit: 135461,
   credit: 0

}
let credito: IContabildad = {
  journalEntryId: this.id,
  accountId: 3,
   reference: 'Esta Cuenta reduce en Caja Chica',
   debit: 0,
   credit: 135461

}


this.servicio.ContabilidadItem(debito).subscribe(data => {
console.log(data);

});

this.servicio.ContabilidadItem(credito).subscribe(data => {
console.log(data);

})


});
        Swal(
            'Asiento!',
            'Enviado Correctamente  ',
            'success'
        );

      } else if (
        // Read more about handling dismissals
        registrar.dismiss === Swal.DismissReason.cancel
      ) {
        Swal(
          'Cancelado',
          'Tu asiento no fue enviado',
          'error'
        ); }
       });

  }
}
