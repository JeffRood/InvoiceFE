import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { Cliente } from './cliente.modelo';
import { ClienteService } from './cliente.service';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import Swal from 'sweetalert2';
import { PagesService } from '../pages.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html'
})
export class ClienteComponent implements OnInit {
  forma: NgForm;

  constructor(public servicio: ClienteService,
    public All: PagesService) { }

  ngOnInit() {


  this.servicio.GetClient();


  }
  AgregarCliente(form: NgForm ) {
    // tslint:disable-next-line:no-debugger
    console.log(form.value);
   // tslint:disable-next-line:no-var-keyword
  //  var estado: number;
  //  if (form.value.ClientStatus === true) {
  //        estado = 1;
  //  } else {
  //     estado = 0;
  //  }
    // const cliente: Cliente = {
    //   Name: form.value.Name,
    //   Document: form.value.Document,
    //   AccountingAccount: form.value.AccountingAccount ,
    //   ClientStatus: estado
    // };
    // console.log(cliente);
    // if (this.validarCedula(this.forma.value.cedula) === true) {

     this.servicio.postClient(form.value)
        .subscribe( data => {

          this.resetForm(form);
           this.servicio.GetClient();
           Swal('Exito!', 'El Cliente fue agregado correctamente', 'success');
    }); }

  //   else {
  //     Swal('Error al registrar cliente Revise la cedula', '', 'error');
  //   }

  // }
  show(client: Cliente) {
    this.servicio.selectedcliente = Object.assign({}, client);
  }

ActualizarCliente(id: number, form: NgForm) {
console.log(form.value);

  this.servicio.PutClient(id, form).subscribe(x => {
  this.servicio.GetClient();
    Swal('Actualizado!', 'Cliente Actualizado correctamente', 'success');
  });
}
  // show(clientes: Cliente) {
  //   this.servicio.ClienteList = Object.assign({}, clientes );
  // }

EliminarCliente(id: number) {
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
      this.servicio.DeleteClient(id);
      this.servicio.GetClient();
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
       this.servicio.GetClient();
}

  resetForm(form?: NgForm) {
    // tslint:disable-next-line:no-debugger
    if (form != null ) {
    form.reset();
    this.servicio.selectedcliente = {
      ClientID: null,
    Name: null,
    Document: null,
    AccountingAccount: null,
    ClientStatus: null
    };
  }
  }


  // ----- Excel ----
  excel() {
    this.All.exportAsExcelFile(this.servicio.Clientes, 'VALE');
    }
}
