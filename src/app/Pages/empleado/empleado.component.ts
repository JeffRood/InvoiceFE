import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { Empleado } from './empleado.modelo';
import { EmpleadoService } from './empleado.service';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html'
})
export class EmpleadoComponent implements OnInit {

  constructor(public servicio: EmpleadoService) { }

  ngOnInit(  ) {

  this.servicio.GetEmployee();
  }
  AgregarEmpleado(form: NgForm ) {
    console.log(form.value);
    this.servicio.postEmployee(form.value)
    .subscribe( data => {

      this.resetForm(form);
       this.servicio.GetEmployee();
       Swal('Exito!', 'El Empleado fue agregado correctamente', 'success');
});

  }
  show( empleado: Empleado) {
    this.servicio.selectedEmpleado = Object.assign({}, empleado);
  }
  ActualizarEmpleado(id: number, form: NgForm) {
    console.log(form.value);

      this.servicio.PutEmployee(id, form).subscribe(x => {
      this.servicio.GetEmployee();
        Swal('Actualizado!', 'Empleado Actualizado correctamente', 'success');
      });
    }


    EliminarEmpleado(id: number) {
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
          this.servicio.DeleteEmployee(id);
          this.servicio.GetEmployee();
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
           this.servicio.GetEmployee();
    }



  resetForm(form?: NgForm) {
    // tslint:disable-next-line:no-debugger
    if (form != null ) {
    form.reset();
    this.servicio.selectedEmpleado = {
      EmployeeID: null,
      Name: null,
      BonusPercent: null,
      EmployeeStatus: null,
    };
  }
  }

}
