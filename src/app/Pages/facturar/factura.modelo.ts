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
