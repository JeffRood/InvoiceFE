import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, FormArray, Form } from '@angular/forms';
import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import Swal from 'sweetalert2';
import { EmpleadoService } from '../empleado/empleado.service';
import { ClienteService } from '../cliente/cliente.service';
import { ProductoService } from '../productos/producto.service';
import { FacturaService } from './factura.service';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html'
})
export class FacturaComponent implements OnInit {
    // tslint:disable-next-line:no-inferrable-types
  total: number = 0 ;
    producto: any = 0;
    ID = 0 ;
    myForm: FormGroup;
     idTemporal: number;
     ListaFactura = [];
      editFactura = {
      index: 0,
      Descripcion: '',
      Precio: 0,
      Cantidad: 0
     };

  constructor(
    public servicio: FacturaService,
    public data: FormBuilder,
    public servicioProducto: ProductoService,
    public servicioEmpleado: EmpleadoService,
    public servicioCliente: ClienteService ) {



     }

  ngOnInit() {


     // tslint:disable-next-line:no-unused-expression
    this.ListaFactura;
    this.total = 0;

  // console.log(this.ListaFactura.find('Samsung')


    // this.myForm = this.data.group({
    //   email: '',
    //   phones: this.data.array([])
    // });
  }
  // get phoneForms() {
  //   // tslint:disable-next-line:semicolon
  //   return this.myForm.get('phones') as FormArray;
  // }

  // addPhone() {

  //   const phone = this.data.group({
  //     area: [],
  //     prefix: [],
  //     line: [],
  //   });

  //   this.phoneForms.push(phone);
  // }

  // deletePhone(i) {
  //   this.phoneForms.removeAt(i);
  // }

  resetForm(form?: NgForm) {
    // tslint:disable-next-line:no-debugger

    if (form != null ) {
    form.reset();
    this.ID = 0;
    this.producto = 0;
    this.idTemporal = 0;
    this.servicioProducto.selectedProducto = {
      ProductID: null,
    Description: null,
    Price: null,
    Stock: null,

    };
  }
  }






  verId(id: any) {
    // // tslint:disable-next-line:no-debugger
    // debugger;
    if (this.servicioProducto.Producto.length <= 1) {
       this.idTemporal = 0;
    } else {
      this.idTemporal = id - 2 ;
    }
    // this.ListaFactura.fill(x => {
    //   if (this.ListaFactura[x].ProductID === id) {
    //      console.log(id);


    //   }
    // } );
    // if (this.servicioProducto.Producto.length <= 1) {
    //   this.idTemporal = 0 ;
    //  } else {
    //    this.idTemporal =  ;
    // }

     // tslint:disable-next-line:prefer-const
     for (let i = 0; i < this.ListaFactura.length; i++) {
       this.ID  = this.ListaFactura[i];

     }
   console.log(this.ID);


    // tslint:disable-next-line:prefer-const
 this.servicioProducto.GetOneProduct(id).subscribe(data => {
   this.producto = data;

  });

  // tslint:disable-next-line:no-debugger

  }
  agregarProductoFactura(form?: NgForm) {
// tslint:disable-next-line:prefer-const
    let cantidad = form.value.Cantidad;
    // let cantidad2 = 0;
    //  if (this.ListaFactura.findIndex(this.producto.Description)) {
    //   cantidad2 += cantidad + this.ListaFactura.Cantidad;
    //  }

    // console.log(form.controls.Cantidad.value);
// let Articulo =

  this.servicioProducto.Producto.splice(this.idTemporal, 1);

 // tslint:disable-next-line:prefer-const
 // let Precio = this.producto.Price;
 // tslint:disable-next-line:prefer-const

 // tslint:disable-next-line:prefer-const
 let objFac = {
    'ID' : this.producto.ProductID,
    'Descripcion': this.producto.Description,
    'Precio' : this.producto.Price,
    'Cantidad' : cantidad,

};

// tslint:disable-next-line:no-debugger



  //  if (this.ListaFactura[0].ID === objFac.ID) {
  //  }
 // console.log(objFac);

   this.ListaFactura.push(objFac);
   // console.log(this.ListaFactura[0].ID);
// localStorage.setItem('Factura', JSON.stringify(objFac));
  }


  show1(i: number) {

    this.editFactura = this.ListaFactura[i];
     this.editFactura = {
      index: i,
      Descripcion: this.ListaFactura[i].Descripcion,
      Precio: this.ListaFactura[i].Precio,
      Cantidad: this.ListaFactura[i].Cantidad
     };
  // console.log( this.editFactura);

  }



  prueba1() {
    // tslint:disable-next-line:no-debugger
    debugger;
  }


  Delete(i: number) {

    Swal({
          title: 'Esta seguro?',
          text: 'Loco si borra esto tu supiste que se va',
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, Borralo!'
        }).then(borrar => {
          if (borrar.value) {
          this.ListaFactura.splice(i, 1);
              Swal(
                  'Borrado!',
                  'Tu registro ha sido eliminado.',
                  'success'
              );

            } else if (
              // Read more about handling dismissals
              borrar.dismiss === Swal.DismissReason.cancel
            ) {
              Swal(
                'Cancelado',
                'te salvaste papa casi lo borras :)',
                'error'
              ); }
             });


  }

  /// Cargar en el localStorage
// CargarLista() {
// if (localStorage.getItem('Factura')) {
//  this.ListaFactura = JSON.parse(localStorage.getItem('Factura'));
// } else {
//   this.ListaFactura = [];
// }
// }

ActualizarProducto(form: NgForm , i: number ) {

  // tslint:disable-next-line:prefer-const
   this.ListaFactura[i] = form.value;

  // tslint:disable-next-line:no-debugger
  debugger;
}


// EliminarDetail(id: number) {
//   Swal({
//     title: 'Esta seguro?',
//     text: 'Loco si borra esto tu supiste que se va',
//     type: 'warning',
//     showCancelButton: true,
//     confirmButtonColor: '#3085d6',
//     cancelButtonColor: '#d33',
//     confirmButtonText: 'Si, Borralo!'
//   }).then(borrar => {
//     if (borrar.value) {
//       this.servicio.DeleteClient(id);
//       this.servicio.GetClient();
//         Swal(
//             'Borrado!',
//             'Tu registro ha sido eliminado.',
//             'success'
//         );

//       } else if (
//         // Read more about handling dismissals
//         borrar.dismiss === Swal.DismissReason.cancel
//       ) {
//         Swal(
//           'Cancelado',
//           'te salvaste papa casi lo borras :)',
//           'error'
//         ); }
//        });
//        this.servicio.GetClient();
// }



}
