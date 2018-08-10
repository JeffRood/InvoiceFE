// tslint:disable-next-line:quotemark
import { Time } from "@angular/common";

export class FacturaDetail {
  FacturaDetailID ?: number;
  DetailID: number;
  ProductID: number;
  Quantity: number;
}

export class Factura {
  InvoiceID ?: number;
  DetailID: number;
  EmployeeID: number;
  ClientID: number;
  Date: Time;
  Remark: string;
}


export interface IFactura {
  EmployeeID: number;
  ClientID: number;
  Date: Date;
  Remark: string;
  Details: FacturaDetail[];
}

export interface IFacturaDetail {
  DetailID: number;
  ProductID: number;
  Quantity: number;
}


export interface IAsiento {
  date: string;

  description:	string;

  auxiliaryId: number;

  status:	number;

  currencyId:	number;

  exchangeRate:	number;
}
export interface IFactura2 {
 InvoiceID: number;
 Date: string;
 Cliente: string;
 Empleado: string;
}

export interface FacturaDetalle {
  Producto: string;
  Precio: number;
  Cantidad: number;
  Total: number;
}


export interface Item {

  auxiliaryId : number;
  createdAt : string;
  currencyId : number;
  date  :  string;
  description  : string;
  exchangeRate  :  number;
  id  :  number;
  status  :  number;
  updatedAt  :  string;

}

export interface IContabildad {

journalEntryId: number;
 accountId: number;
  reference: string;
  debit: number;
  credit: number
}
