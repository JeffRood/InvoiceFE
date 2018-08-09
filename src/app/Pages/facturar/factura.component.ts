import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, FormArray, Form } from '@angular/forms';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import Swal from 'sweetalert2';
import { EmpleadoService } from '../empleado/empleado.service';
import { ClienteService } from '../cliente/cliente.service';
import { ProductoService } from '../productos/producto.service';
import { FacturaService } from './factura.service';
import { Producto } from '../productos/producto.modelo';
import {IFactura, IFacturaDetail } from './factura.modelo';



@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html'
})
export class FacturaComponent implements OnInit {
    // tslint:disable-next-line:no-inferrable-types
factura: IFactura;
facturaDetail: IFacturaDetail;
   precio = 0;
  total = 0 ;
  EmpleadoID = 0;
  ClienteID = 0;
    producto: Producto;
    stock = 0;
    ID = 0 ;
    myForm: FormGroup;
    idTemporal: number;
    ListaFactura = [];
    ListaFacturaBD = [];
    editFacturaDB = {
      index: 0,
      ProductID: 0,
      Quantity: 0,
    };

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
    this.ListaFactura;
    this.total = 0;
    this.EmpleadoID = 0;
    this.ClienteID = 0;
  }


  resetForm(form?: NgForm) {
    if (form != null ) {
    form.reset();
    this.ID = 0;
    this.producto = null;
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
 this.servicioProducto.GetOneProduct(id).subscribe(data => {
   this.producto = data  as Producto;
  });
  this.stock = this.producto.Stock;
  console.log(this.stock);

 }


  agregarProductoFactura(form: NgForm ) {

    let cantidad = form.value.Cantidad;

 let objFac = {
    'ID' : this.producto.ProductID,
    'Descripcion': this.producto.Description,
    'Precio' : this.producto.Price,
    'Cantidad' : cantidad
};

let ObFacBD = {
  'ProductID' : this.producto.ProductID,
  'Quantity' : cantidad
};

   this.ListaFactura.push(objFac);
   this.ListaFacturaBD.push(ObFacBD);

   let posicion = this.servicioProducto.Producto.map((e) => e.ProductID ).indexOf( this.producto.ProductID);
    this.servicioProducto.Producto.splice( posicion , 1);
this.total = 0;
    for (let i = 0; i <= this.ListaFactura.length; i++) {
      this.total += this.ListaFactura[i].Precio * this.ListaFactura[i].Cantidad;

    }

  }


  show1(i: number) {

    this.editFactura = this.ListaFactura[i];
     this.editFactura = {
      index: i,
      Descripcion: this.ListaFactura[i].Descripcion,
      Precio: this.ListaFactura[i].Precio,
      Cantidad: this.ListaFactura[i].Cantidad
     };

     this.editFacturaDB = this.ListaFacturaBD[i];
     this.editFacturaDB = {
      index: i,
      ProductID: this.ListaFacturaBD[i].ProductID,
      Quantity: this.ListaFacturaBD[i].Cantidad
     };




  }


  Delete(i: number) {
    let producto = this.ListaFactura[i];
    this.servicioProducto.GetOneProduct(producto.ID).subscribe(data => {
      this.producto = data as Producto;
     });
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
            debugger;
            this.ListaFactura.splice(i, 1);
            this.ListaFacturaBD.splice(i, 1);
            this.servicioProducto.Producto.push(this.producto);
            this.total = 0;
            // tslint:disable-next-line:no-shadowed-variable
            for (let i = 0; i <= this.ListaFactura.length; i++) {
              this.total += this.ListaFactura[i].Precio * this.ListaFactura[i].Cantidad;

            }
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

ActualizarProducto(form: NgForm , i: number ) {
  debugger;
   this.ListaFactura[i] = form.value;

   this.total = 0;
    // tslint:disable-next-line:no-shadowed-variable
    for (let i = 0; i <= this.ListaFactura.length; i++) {
      this.total += this.ListaFactura[i].Precio * this.ListaFactura[i].Cantidad;

    }



     // tslint:disable-next-line:no-shadowed-variable


  }

Facturar(lista) {

this.factura =  {
  EmployeeID: this.EmpleadoID,
  ClientID: this.ClienteID,
  Date: new Date(Date.now()),
  Remark: null,
  Details: this.ListaFacturaBD
};

console.log(this.factura);
console.log(lista);

this.servicio.postFactura(this.factura)
.subscribe(data => console.log(data)
);

}

asignarempleado(emp) {
   this.EmpleadoID = emp;
}
asignarCliente(cli) {
  this.ClienteID = cli;
}
}



