import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FacturaDetail, Factura } from './factura.modelo';
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
}
