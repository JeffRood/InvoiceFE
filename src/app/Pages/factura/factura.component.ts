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

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html'
})
export class FacturaComponent implements OnInit {
    // tslint:disable-next-line:no-inferrable-types
  total: number = 0 ;
    producto: Producto;
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
    public servicioCliente: ClienteService ) { }

  ngOnInit() {
    this.ListaFactura;
    this.total = 0;
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
 }


  agregarProductoFactura(form: NgForm ) {

    let cantidad = form.value.Cantidad;

 let objFac = {
    'ID' : this.producto.ProductID,
    'Descripcion': this.producto.Description,
    'Precio' : this.producto.Price,
    'Cantidad' : cantidad
};
   this.ListaFactura.push(objFac);

   let posicion = this.servicioProducto.Producto.map((e) => e.ProductID ).indexOf( this.producto.ProductID);
    this.servicioProducto.Producto.splice( posicion , 1);

  }


  show1(i: number) {

    this.editFactura = this.ListaFactura[i];
     this.editFactura = {
      index: i,
      Descripcion: this.ListaFactura[i].Descripcion,
      Precio: this.ListaFactura[i].Precio,
      Cantidad: this.ListaFactura[i].Cantidad
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
            this.servicioProducto.Producto.push(this.producto);
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
  debugger;
  }
}
