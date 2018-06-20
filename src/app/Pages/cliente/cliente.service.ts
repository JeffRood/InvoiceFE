import { Injectable } from '@angular/core';
import { Cliente } from './cliente.modelo';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Response, RequestOptions, RequestMethod } from '@angular/http';

// import 'rxjs/add/operator/map';
// import 'rxjs/Observable';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  web = 'http://localhost:58175/';
  ClienteList: Cliente[];
  cliente: Cliente = {
    ID_Cliente: null,
    Name: '',
    Cedula: '',
    Cuenta_Contable: null,
    Estado: ''
  };

  constructor(private http: HttpClient) {

   }

  // Servicios

  postClient(emp: Cliente) {
    // tslint:disable-next-line:prefer-const
    let body = JSON.stringify(emp);
      // tslint:disable-next-line:prefer-const
    let headerOptions = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(this.web + ' api/Clients', body, {headers: headerOptions});
}

GetClient() {
   return this.http.get('http://localhost:58175/api/Clients');
}


}
