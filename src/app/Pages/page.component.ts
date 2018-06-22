import { Component, OnInit } from '@angular/core';
import { ClienteService } from './cliente/cliente.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html'
})
export class PageComponent implements OnInit {

  constructor(public servicio: ClienteService) { }

  ngOnInit() {

  }

}
