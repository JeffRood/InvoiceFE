import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { Cliente } from './cliente.modelo';
import { ClienteService } from './cliente.service';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html'
})
export class ClienteComponent implements OnInit {
  forma: NgForm;

  constructor(public servicio: ClienteService) { }

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
//   validarCedula(cedula: string) {

//    console.log(cedula);
//     let calculo: number;
//     // tslint:disable-next-line:no-inferrable-types
//     let total: number = 0;

//     // tslint:disable-next-line:prefer-const
//     let vCedula = cedula.replace(/-/g, '');
//     let Veri = 0;
//       // tslint:disable-next-line:prefer-const
//     let longCed = vCedula.trim().length;
//     // tslint:disable-next-line:prefer-const
//     let verificador = Number(vCedula.substr(vCedula.length - 1, 1));
//     // tslint:disable-next-line:prefer-const
//     let digito: number[] = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1];

//     if (longCed !== 11) {
//       return false;
//     }
//     for (let i = 1; i <= 10; i++) {
//       calculo = Number(vCedula.substr(i - 1, 1)) * digito[i - 1];

//       if (calculo < 10) {
//         total += calculo;
//       } else {
//         total += Number(calculo.toString().substr(0, 1)) + Number(calculo.toString().substr(1, 1));
//       }
//       Veri = 10 - total % 10;
//     }
//     if (Veri === 10 || Veri === verificador) {
//       return true;
//     } else {
//       return false;
//     }

// }
}


// registrarCliente( forma: FormGroup) {

//   try {
//     if (this._ClientesService.controlID === true) {
//       console.log('Estoy en el post');
//       if (this.validarCedula(this.forma.value.cedula) === true) {
//         console.log(this.forma.value);
//         try {
//           this._ClientesService.postClientes(forma.value)
//             .subscribe(data => {
//               swal('Cliente registrado', '', 'success');
//               this.resetForm(forma);
//             });
//         } catch {
//             swal('Error al registrar cliente', '', 'error');
//           }
//       } else {
//         swal('Cedula invalida', 'porfavor digite una cedula valida', 'error');
//       }

//     } else {

//       try {
//       console.log('Estoy en el put');
//       if (this.validarCedula(this.forma.value.cedula) === true) {
//         this._ClientesService.putCliente(forma.value.clienteID, forma.value)
//     .subscribe(data => {
//       swal('Articulo actualizado', '', 'success');
//       this.resetForm(forma);
//       this._ClientesService.GetClientes();
//     });
//       } else {
//         swal('Cedula invalida', 'porfavor digite una cedula valida', 'error');
//       }
//       } catch {
//         swal('Error al actualizar cliente', '', 'error');
//       }
//   }
//   } catch {
//     swal('Ha ocurrido un error', '', 'error');
//   }
// }
