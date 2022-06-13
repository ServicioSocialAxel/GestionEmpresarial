import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { InfoService } from './services/info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, DoCheck{
  title = 'redesComp';
  unidades: any;
  currentLink: string = "";
  navs : Array<any> = [
    {
      title : "Metodología",
      link: "#meto"
    },
    {
      title : "Competencia",
      link: "#competencia"
    },
    {
      title : "Evaluación",
      link: "#eval"
    },
    {
      title : "Estrategias de Aprendizaje",
      link: "#estrategias"
    },
    {
      title : "Contactos",
      link: "#contactos"
    },
    {
      title : "Requerimientos",
      link: "#reque"
    }

  ]
  constructor(private router: Router, private infoService: InfoService){
    this.unidades = this.infoService.getUnidades();
  }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    this.currentLink = this.router.url;
  }

  goToId(id:any){
    const element = document.querySelector(id);
    element.scrollIntoView();
    element.scrollIntoView();
  }

  collapse(){
     document.getElementById('navbarSupportedContent')?.classList.remove('show');
  }

}


