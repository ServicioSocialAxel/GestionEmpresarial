import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-unidad',
  templateUrl: './unidad.component.html',
  styleUrls: ['./unidad.component.css']
})
export class UnidadComponent implements OnInit {

  @Input() unidad: any;
  @Input() tipo: number = 0;
  constructor() {
  }

  ngOnInit(): void {
  }
}
