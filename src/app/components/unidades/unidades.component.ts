import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfoService } from '../../services/info.service';

@Component({
  selector: 'app-unidades',
  templateUrl: './unidades.component.html',
  styleUrls: ['./unidades.component.css'],
})
export class UnidadesComponent implements OnInit, DoCheck {
  uniSection: string = 'contenidos';
  unidades: any[] = [];
  id: number = 1;
  unidad: any;
  flagCuadro: boolean = true;
  constructor(
    private route: ActivatedRoute,
    private infoService: InfoService
  ) {}

  ngOnInit(): void {
    this.infoService.writeJSON(['test']);
    this.unidades = this.infoService.getUnidades();
    this.updateId();
    this.updateUnidad();
  }

  ngDoCheck(): void {
    if (this.id != this.route.snapshot.params.id) {
      this.unidades = this.infoService.getUnidades();
      this.updateId();
      this.updateUnidad();
    }
  }

  updateId = (): void => {
    this.id = 1;
    if (!isNaN(this.route.snapshot.params.id))
      this.id =
        this.route.snapshot.params.id % this.unidades.length == 0
          ? this.unidades.length
          : this.route.snapshot.params.id % this.unidades.length;
  };

  updateResources = (): void => {
    this.unidad.recurso.forEach((element: any) => {
      if (!element.recurso || element.recurso.trim() == '') {
        element.recurso =
          "<h3 class='text-center'>Sin recursos disponibles</h3>";
      }
    });
  };

  updateContents = (): void => {
    this.unidad.contenido.forEach((element: any) => {
      if (!element.unidad || element.unidad.trim() == '')
        element.unidad =
          "<h3 class='text-center mt-4'>Sección sin información</h3>";
    });
  };

  updateUnidad = (): void => {
    this.unidad = this.unidades[this.id - 1];
    if (!this.unidad.cuadroEval || this.unidad.cuadroEval.trim() == '')
      this.flagCuadro = false;
    this.updateResources();
    this.updateContents();
  };
}
