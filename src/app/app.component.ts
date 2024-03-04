import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { InfoService } from './services/info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements DoCheck {
  title = 'redesComp';
  unidades: any;
  currentLink: string = '';
  navs: Array<any> = [
    {
      title: 'Bienvenida',
      link: '#bienvenida',
    },
    {
      title: 'Metodología',
      link: '#metodologia',
    },
    {
      title: 'Unidad de competencia',
      link: '#unidad',
    },
    {
      title: 'Evaluación',
      link: '#eval',
    },
    {
      title: 'Programa',
      link: '#prog',
    },
    {
      title: 'Contacto',
      link: '#contacts',
    },
    {
      title: 'Requerimientos',
      link: '#req',
    },
  ];
  constructor(private router: Router, private infoService: InfoService) {
    this.unidades = this.infoService.getUnidades();
  }

  ngDoCheck(): void {
    this.currentLink = this.router.url;
  }

  goToId(id: any) {
    const element = document.querySelector(id);
    element.scrollIntoView();
    element.scrollIntoView();
  }

  collapse() {
    document.getElementById('navbarSupportedContent')?.classList.remove('show');
  }
}
