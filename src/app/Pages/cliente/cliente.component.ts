import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Cliente } from './cliente.modelo';
import { ClienteService } from './cliente.service';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html'
})
export class ClienteComponent implements OnInit {



  constructor(private servicio: ClienteService) { }

  ngOnInit() {
    console.log(
      this.servicio.GetClient()
          .subscribe(data => console.log(data)));
  }

  // show(clientes: Cliente) {
  //   this.servicio.ClienteList = Object.assign({}, clientes );
  // }



}
