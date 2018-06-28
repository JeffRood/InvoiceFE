import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import Swal from 'sweetalert2';
import { EmpleadoService } from '../empleado/empleado.service';
import { ClienteService } from '../cliente/cliente.service';
import { ProductoService } from '../productos/producto.service';
import { ArrayType } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html'
})
export class FacturaComponent implements OnInit {
    // tslint:disable-next-line:no-inferrable-types

    producto: any = 0;
    myForm: FormGroup;
     ListaFactura = [];
  constructor(
    public data: FormBuilder,
    public servicioProducto: ProductoService,
    public servicioEmpleado: EmpleadoService,
    public servicioCliente: ClienteService ) {


     }

  ngOnInit() {
    // tslint:disable-next-line:no-unused-expression
    this.ListaFactura;
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
    this.producto = 0;
    this.servicioProducto.selectedProducto = {
      ProductID: null,
    Description: null,
    Price: null,
    Stock: null,

    };
  }
  }






  verId(id: number) {
    // // tslint:disable-next-line:no-debugger
    // debugger;

    // tslint:disable-next-line:prefer-const
 this.servicioProducto.GetOneProduct(id).subscribe(data => {
this.producto = data;

  });


  }
  agregarProductoFactura(form?: NgForm) {


    // console.log(form.controls.Cantidad.value);
// let Articulo =
 // tslint:disable-next-line:prefer-const
 let cantidad = form.value.Cantidad;


 // tslint:disable-next-line:prefer-const
 let Precio = this.producto.Price;
 // tslint:disable-next-line:prefer-const

 // tslint:disable-next-line:prefer-const
 let objFac = {
    'Descripcion': this.producto.Description,
    'Precio' : this.producto.Price,
    'Cantidad' : cantidad,

};
  console.log(objFac);

   this.ListaFactura.push(objFac);
// localStorage.setItem('Factura', JSON.stringify(objFac));



  }
// CargarLista() {
// if (localStorage.getItem('Factura')) {
//  this.ListaFactura = JSON.parse(localStorage.getItem('Factura'));
// } else {
//   this.ListaFactura = [];
// }
// }

ActualizarProducto(form  ) {
  console.log(form + 'Estoo es en el capitulo');
  // tslint:disable-next-line:prefer-const
  let indice = this.ListaFactura.indexOf(form);
  console.log(indice);



  // tslint:disable-next-line:no-debugger


}
}
