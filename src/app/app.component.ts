import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { InfoService } from './services/info.service';
import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements DoCheck {
  lang: string = localStorage.getItem('lang') ?? 'es';
  title = 'Gestión Empresarial';
  unidades: any;
  currentLink: string = '';
  navs: Array<any> = [
    {
      title: 'welcome',
      link: '#welcome',
    },
    {
      title: 'methodology',
      link: '#methodology',
    },
    {
      title: 'goal',
      link: '#goal',
    },
    {
      title: 'eval',
      link: '#eval',
    },
    {
      title: 'prog',
      link: '#prog',
    },
    {
      title: 'contacts',
      link: '#contacts',
    },
    {
      title: 'req',
      link: '#req',
    },
  ];
  constructor(
    private router: Router,
    private infoService: InfoService,
    public translateService: TranslateService,
    private titleService: Title
  ) {
    this.translateService.addLangs(['es', 'en']);
    this.lang = this.translateService.getBrowserLang() ?? 'es';
    if (!RegExp(/es|en/).exec(this.lang)) this.lang = 'en';
    this.translateService.setDefaultLang(this.lang);
    this.translateService.use(localStorage.getItem('lang') ?? this.lang);
    this.infoService.getUnidades().subscribe((unidades) => {
      this.unidades = unidades;
    });
    this.translateService.onLangChange.subscribe(() => {
      this.updateTitle();
    });
  }

  updateTitle = () => {
    const title = this.translateService
      .instant('app.firstTitle')
      .concat(' ', this.translateService.instant('app.secondTitle'));
    this.titleService.setTitle(title);
  };

  ngDoCheck(): void {
    this.currentLink = this.router.url;
    this.infoService.getUnidades().subscribe((unidades) => {
      this.unidades = unidades;
      this.updateTitle();
    });
  }

  goToId(id: any) {
    const element = document.querySelector(id);
    element.scrollIntoView();
    element.scrollIntoView();
  }

  collapse() {
    document.getElementById('navbarSupportedContent')?.classList.remove('show');
  }

  setLang(event: Event) {
    const target = event.target as HTMLButtonElement;
    this.lang = target.value;
    this.translateService.use(this.lang);
    localStorage.setItem('lang', this.lang);
  }
}
