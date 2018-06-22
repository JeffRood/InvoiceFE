import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


declare function init_plugins();
declare const gapi: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.css']
})
export class LoginComponent implements OnInit {
  email: string;
  recuerdame = false;
  constructor() { }
  ngOnInit() {

    this.email = localStorage.getItem('email') || '';
    if (this.email.length > 1) {
      this.recuerdame = true;
  }

}
ingresar(forma: NgForm) {
  if (forma.invalid) {
    return ;
  }
}
}
