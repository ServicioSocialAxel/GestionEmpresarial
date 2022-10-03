import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { InfoService } from 'src/app/services/info.service';

@Component({
  selector: 'app-recursos',
  templateUrl: './recursos.component.html',
  styleUrls: ['./recursos.component.css']
})
export class RecursosComponent implements OnInit {
  id: number = 1;
  unidades: any[] = [];
  unidad: any;
  constructor(private router : Router, private route: ActivatedRoute, private infoService: InfoService) {
  }

  ngOnInit(): void {
    this.unidades = this.infoService.getUnidades();
    this.updateId();
    this.updateUnidad();
  }

  ngDoCheck(): void {
    if(this.id != this.route.snapshot.params.id){
      this.unidades = this.infoService.getUnidades();
      this.updateId();
      this.updateUnidad();
    }
  }

  updateId(){
    this.id = 1;
    if(!isNaN(this.route.snapshot.params.id))
      this.id = this.route.snapshot.params.id % this.unidades.length == 0 ? this.unidades.length : this.route.snapshot.params.id % this.unidades.length;
  }

  updateUnidad(){
    this.unidad = this.unidades[this.id-1];
    this.unidad.recurso.forEach((element:any) => {
      if(!element.recurso || element.recurso.trim()==""){
        element.recurso = "<h3 class='text-center'>Sin recursos disponibles</h3>";
      }
      if(!element.actividad || element.actividad.trim()==""){
        element.actividad = "<h3 class='text-center'>Sin actividades disponibles</h3>";
      }
    });
  }
}
