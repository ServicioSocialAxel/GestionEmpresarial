import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { InfoService } from '../../services/info.service';

@Component({
  selector: 'app-evaluaciones',
  templateUrl: './evaluaciones.component.html',
  styleUrls: ['./evaluaciones.component.css']
})
export class EvaluacionesComponent implements OnInit {

  id: number = 1;
  unidad: any;
  unidades: any[] = [];
  autoevaluacion: any[] = [];
  test: any[] = [];
  res: number[] = [];
  note: number = 0;
  constructor(private router : Router, private route: ActivatedRoute, private infoService: InfoService ) {
  }

  ngOnInit(): void {
    this.unidades = this.infoService.getUnidades();
    this.autoevaluacion = this.infoService.getAutoevaluaciones();
    this.updateId();
    this.updateUnidad();
  }

  ngDoCheck(): void {
    if(this.id != this.route.snapshot.params.id){
      this.unidades = this.infoService.getUnidades();
      this.autoevaluacion = this.infoService.getAutoevaluaciones();
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
    this.test = this.autoevaluacion[this.id-1];
    this.res = new Array(this.autoevaluacion[this.id-1].length).fill(-1);
  }

  onSubmit(f:any){
    this.note = 0;
    this.test.forEach((value, index) => {
      if(value.res==this.res[index])
        this.note++;
    });
    this.note*=10;
    this.note/=this.test.length;
    this.note=Number(this.note.toFixed(3));
  }

}
