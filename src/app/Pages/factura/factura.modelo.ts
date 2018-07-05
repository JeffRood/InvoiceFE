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