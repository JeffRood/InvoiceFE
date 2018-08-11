import { Injectable } from '@angular/core';
import { Cliente } from './cliente.modelo';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


import { Response, RequestOptions, RequestMethod } from '@angular/http';

// import 'rxjs/add/operator/map';
// import 'rxjs/Observable';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {


  Clientes: any;
    selectedcliente: Cliente = {
    ClientID: null,
    Name: null,
    Document: null,
    AccountingAccount: null,
    ClientStatus: null
  };
  //url = 'http://localhost:51516/';
  url = 'http://facturar.azurewebsites.net/';

  constructor(private http: HttpClient) {

   }

 // Servicios

GetClient() {




  return this.http.get(this.url + 'api/Clients').subscribe(data => {
   this.Clientes = data;

 });
}
  postClient(client: Cliente): Observable<any> {
    // tslint:disable-next-line:prefer-const
    let json = JSON.stringify(client);
    // tslint:disable-next-line:prefer-const
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post(this.url + 'api/Clients', json, httpOptions);
}
DeleteClient( id: number) {
  return this.http.delete(this.url + 'api/Clients/' + id).subscribe(
 data => {
  this.GetClient();
 }
  );

}
PutClient(id , client): Observable<any> {
  // tslint:disable-next-line:prefer-const
  let json = JSON.stringify(client);
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
   return this.http.put(this.url + 'api/Clients/' + id, json, httpOptions);

}



}
