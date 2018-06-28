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


  constructor(private http: HttpClient ) {


  }
  GetEmployee() {

    return this.http.get('http://localhost:51516/api/Employees').subscribe(data => {
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

    return this.http.post('http://localhost:51516/api/Employees', json, httpOptions);
}

DeleteEmployee( id: number) {
  return this.http.delete('http://localhost:51516/api/Employees/' + id).subscribe(data => {
    this.GetEmployee();
  });
}
PutEmployee(id , Emp): Observable<any> {
  // tslint:disable-next-line:prefer-const
  let json = JSON.stringify(Emp);
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
   return this.http.put('http://localhost:51516/api/Employees/' + id, json, httpOptions);

}


}
