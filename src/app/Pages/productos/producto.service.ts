import { Injectable } from '@angular/core';
import { Producto } from './producto.modelo';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

// ------- EXCEL -------------
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx/types';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
@Injectable({
  providedIn: 'root'
})

export class ProductoService {

  Producto: any = [];
  ElProducto: any;


  selectedProducto: Producto = {
    ProductID: null,
    Description: null,
    Price: null,
    Stock: null
  };
  url = 'http://localhost:51516/';
 // url = 'http://invoiceintegracion.azurewebsites.net/';
  constructor(private http: HttpClient) { }



  GetProduct() {
    // tslint:disable-next-line:no-debugger

    return this.http.get(this.url + 'api/Products').subscribe(data => {
     this.Producto = data;
   });
  //  GetProduct() {
  //   // tslint:disable-next-line:no-debugger
  //   debugger;
  //   return this.http.get('http://localhost:51516/api/Products').subscribe(data => {
  //    this.Producto = data;

  //  });


  }

 GetOneProduct(id: number) {

    return this.http.get(this.url + 'api/Products/' + id);
 }
  postProduct(prod: Producto): Observable<any> {
    // tslint:disable-next-line:prefer-const
    let json = JSON.stringify(prod);
    // tslint:disable-next-line:prefer-const
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post(this.url + 'api/Products', json, httpOptions);
}


DeleteProduct( id: number) {
  return this.http.delete(this.url + 'api/Products/' + id).subscribe(data => {
    this.GetProduct     ();
  });
}
PutProduct(id , prod): Observable<any> {
  // tslint:disable-next-line:prefer-const
  let json = JSON.stringify(prod);
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
   return this.http.put(this.url + 'api/Products/' + id, json, httpOptions);

}



}




