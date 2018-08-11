import { Injectable } from '@angular/core';
import { Empleado } from './empleado.modelo';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  Empleado: any;

    selectedEmpleado: Empleado = {
   EmployeeID: null,
    Name: null,
    BonusPercent: null,
    EmployeeStatus: null,
  };

  //url = 'http://localhost:51516/';
   url = 'http://facturar.azurewebsites.net/';
  constructor(private http: HttpClient ) {


  }
  GetEmployee() {

    return this.http.get(this.url + 'api/Employees').subscribe(data => {
     this.Empleado = data;
      });
  }
  postEmployee(Emp: Empleado): Observable<any> {
    // tslint:disable-next-line:prefer-const
    let json = JSON.stringify(Emp);
    // tslint:disable-next-line:prefer-const
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post(this.url + 'api/Employees', json, httpOptions);
}

DeleteEmployee( id: number) {
  return this.http.delete(this.url + 'api/Employees/' + id).subscribe(data => {
    this.GetEmployee();
  });
}
PutEmployee(id , Emp): Observable<any> {
  // tslint:disable-next-line:prefer-const
  let json = JSON.stringify(Emp);
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
   return this.http.put(this.url + 'api/Employees/' + id, json, httpOptions);

}


}
