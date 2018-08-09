import { Component, OnInit } from '@angular/core';
import { IAsiento } from '../facturar/factura.modelo';

@Component({
  selector: 'app-contabilidad',
  templateUrl: './contabilidad.component.html'
})
export class ContabilidadComponent implements OnInit {

Codigo_Contabilidad = 3;

asiento: IAsiento;
  constructor() { }

  ngOnInit() {
  }

}
