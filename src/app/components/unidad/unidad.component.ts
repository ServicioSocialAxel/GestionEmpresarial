import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-unidad',
  templateUrl: './unidad.component.html',
  styleUrls: ['./unidad.component.css'],
})
export class UnidadComponent implements OnInit {
  @Input() unidad: any;
  @Input() tipo: number = 0;
  @Input() selection: string = 'contenidos';
  rsrcsCategory: string = 'video';
  ngOnInit(): void {
    if (this.unidad.activities)
      this.unidad.activities = this.unidad.activities.filter(
        (activity: any) => activity
      );
  }
  rscCategortyFilter = (resource: any) =>
    resource.category === this.rsrcsCategory;
}
