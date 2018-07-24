import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FacturaDetail, Factura } from './factura.modelo';
import { Headers } from '../../../../node_modules/@angular/http';
@Injectable({
  providedIn: 'root'
})
export class FacturaService {
  SelectedDetail: FacturaDetail = {
    FacturaDetailID: null,
    DetailID : null,
    ProductID : null ,
    Quantity : null,
};

SelectedFactura: Factura = {
  InvoiceID: null,
  DetailID : null,
  EmployeeID : null ,
  ClientID : null,
  Date: null,
  Remark : null,
};
  constructor(private http: HttpClient ) { }

  postClient(client: any): Observable<any> {
    // tslint:disable-next-line:prefer-const
    let json = JSON.stringify(client);
    // tslint:disable-next-line:prefer-const
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post('http://localhost:51516/api/Invoices', json, httpOptions);
}
GenerarFactura(fac) {

    // tslint:disable-next-line:prefer-const
    let json = JSON.stringify(fac);

    // tslint:disable-next-line:prefer-const

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    debugger;
    let url = 'http://localhost:51516/api/Invoices';
    return this.http.post(url, json, httpOptions);
}
}
