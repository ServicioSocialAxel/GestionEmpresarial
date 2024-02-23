import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-unidad',
  templateUrl: './unidad.component.html',
  styleUrls: ['./unidad.component.css'],
})
export class UnidadComponent {
  @Input() unidad: any;
  @Input() tipo: number = 0;
  @Input() selection: string = 'contenidos';
}
