import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { InfoService } from '../../services/info.service';
import { TranslateService } from '@ngx-translate/core';
import { Glossary } from '../../services/model/glossary';

@Component({
  selector: 'app-glosario',
  templateUrl: './glosario.component.html',
  styleUrls: ['./glosario.component.css'],
})
export class GlosarioComponent implements OnInit, OnChanges {
  dtOptions: DataTables.Settings = {
    columns: [{ width: '33%' }],
  };
  constructor(
    private infoService: InfoService,
    public translateService: TranslateService
  ) {}

  initGlossary = (glossary: Glossary) => {
    this.dtOptions = {
      data: glossary.definitions,
      paging: true,
      info: false,
      responsive: true,
      lengthMenu: [
        [4, 8, 16, -1],
        [4, 8, 16, glossary.showAll],
      ],
      language: {
        search: glossary.search,
        paginate: {
          first: '',
          last: '',
          previous: glossary.prev,
          next: glossary.next,
        },
        info: glossary.infoTemplate,
        lengthMenu: glossary.lengthTemplate,
      },
      columns: [
        {
          data: 'word',
        },
        {
          data: 'definition',
        },
        {
          data: 'sources',
          render: function (data, type, row, meta) {
            return data;
          },
        },
      ],
    };
  };

  ngOnInit(): void {
    this.infoService
      .getGlossary(this.translateService.currentLang)
      .subscribe((glossary) => {
        this.initGlossary(glossary);
      });
    this.translateService.onLangChange.subscribe((event) => {
      this.infoService.getGlossary(event.lang).subscribe((glossary) => {
        this.initGlossary(glossary);
      });
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    changes.dtOptions;
    this.infoService
      .getGlossary(this.translateService.currentLang)
      .subscribe((glossary) => {
        this.initGlossary(glossary);
      });
    this.translateService.onLangChange.subscribe((event) => {
      this.infoService.getGlossary(event.lang).subscribe((glossary) => {
        this.initGlossary(glossary);
      });
    });
  }
}
