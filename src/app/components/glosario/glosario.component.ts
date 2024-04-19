import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../services/info.service';

@Component({
  selector: 'app-glosario',
  templateUrl: './glosario.component.html',
  styleUrls: ['./glosario.component.css'],
})
export class GlosarioComponent implements OnInit {
  dtOptions: DataTables.Settings = {
    columns: [{ width: '33%' }],
  };
  constructor(private infoService: InfoService) {}

  ngOnInit(): void {
    this.infoService.getGlossary().subscribe((glossary) => {
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
    });
  }
}
