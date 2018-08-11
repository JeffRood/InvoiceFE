import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FacturaDetail, Factura, IAsiento } from './factura.modelo';
import { Headers } from '@angular/http';
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

selectedAsiento: IAsiento  =  {
  date: null,

  description:	null,

  auxiliaryId: null,

  status:	null,
  currencyId:	null,

  exchangeRate:	null
};

// url = 'http://localhost:51516/';
 url = 'http://facturar.azurewebsites.net/';
  constructor(private http: HttpClient ) { }

  postFactura(factura: any): Observable<any> {
    // tslint:disable-next-line:prefer-const
    let json = JSON.stringify(factura);
    // tslint:disable-next-line:prefer-const
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post(this.url + 'api/Invoices', json, httpOptions);
}
GenerarFactura(fac) {

    // tslint:disable-next-line:prefer-const
    let json = JSON.stringify(fac);

    // tslint:disable-next-line:prefer-const

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    debugger;
    let url = this.url + 'api/Invoices';
    return this.http.post(url, json, httpOptions);
}


obtenerFactura() {
  return this.http.get(this.url + 'api/Invoices');
}

obtenerDetalleFactura(id: number) {
  return this.http.get(this.url + 'api/Invoices/' + id );
}


Contabilidad(asiento) {
    // tslint:disable-next-line:prefer-const
    let json = JSON.stringify(asiento);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    let url = 'https://simpleaccountingapp-api.azurewebsites.net//journalEntries';
    return this.http.post(url, json, httpOptions);
}

ContabilidadItem(asientoItem) {
  debugger;
  // tslint:disable-next-line:prefer-const
  let json = JSON.stringify(asientoItem);
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  let url = 'https://simpleaccountingapp-api.azurewebsites.net//journalItems';
  return this.http.post(url, json, httpOptions);
}


}
