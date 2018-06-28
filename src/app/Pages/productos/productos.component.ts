import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { Producto } from './producto.modelo';
import { ProductoService } from './producto.service';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html'
})
export class ProductosComponent implements OnInit {

  constructor(public servicio: ProductoService) { }

  ngOnInit() {
    this.servicio.GetProduct();
  }
  AgregarProducto(form: NgForm ) {
    console.log(form.value);
    this.servicio.postProduct(form.value)
    .subscribe( data => {

      this.resetForm(form);
       this.servicio.GetProduct();
       Swal('Exito!', 'El Empleado fue agregado correctamente', 'success');
});

  }
  show( producto: Producto) {
    this.servicio.selectedProducto = Object.assign({}, producto);
  }
  ActualizarProducto(id: number, form: NgForm) {
    console.log(form.value);

      this.servicio.PutProduct(id, form).subscribe(x => {
      this.servicio.GetProduct();
        Swal('Actualizado!', 'Empleado Actualizado correctamente', 'success');
      });
    }

    EliminarProducto(id: number) {
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
          this.servicio.DeleteProduct(id);
          this.servicio.GetProduct();
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
           this.servicio.GetProduct();
    }


  resetForm(form?: NgForm) {
    // tslint:disable-next-line:no-debugger
    if (form != null ) {
    form.reset();
    this.servicio.selectedProducto = {
      ProductID: null,
      Description: null,
      Price: null,
      Stock: null,
    };
  }
  }
}
