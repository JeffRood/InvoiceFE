
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';

declare function init_plugins();
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.css']
})

export class RegisterComponent implements OnInit {
  forma: FormGroup;
  constructor(public router: Router) { }

  ngOnInit() {
    init_plugins();
    this.forma = new FormGroup({
      nombres: new FormControl(null , Validators.required),
      cedula: new FormControl(null , Validators.required),
      direccion: new FormControl(null , Validators.required),
      telefono: new FormControl(null , Validators.required),
      usuario: new FormControl(null , Validators.required),
      password: new FormControl(null , Validators.required),
      password2: new FormControl(null , Validators.required),
      role: new FormControl(null , Validators.required),
      condiciones: new FormControl(false)
    }, { validators: this.sonIguales('password', 'password2')});
  }
  sonIguales( campo1: string, campo2: string) {
    return(group: FormGroup) => {

      // tslint:disable-next-line:prefer-const
      let pass1 = group.controls[campo1].value;
      // tslint:disable-next-line:prefer-const
      let pass2 = group.controls[campo2].value;

      if ( pass1 === pass2) {
        return null;
      }
      return{
        sonIguales: true
      };
    };
  }

  Register(usuario: NgForm) {
console.log(usuario);



  }
  }


