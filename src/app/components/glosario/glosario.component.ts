import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../services/info.service';

@Component({
  selector: 'app-glosario',
  templateUrl: './glosario.component.html',
  styleUrls: ['./glosario.component.css']
})
export class GlosarioComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  constructor(private infoService : InfoService) { }

  ngOnInit(): void {
    this.dtOptions = {
      data: this.infoService.getGlosario(),
      paging: true,
      info:     false,
      responsive: true,
      lengthMenu: [[4, 8, 16, -1], [4, 8, 16, "Todas"]],
      language:{
        search: "Buscar",
        paginate: {
          first: "",
          last: "",
          previous: "Anterior",
          next: "Siguiente"
        },
        info: "Mostrando _START_ to _END_ de _TOTAL_ registros",
        lengthMenu: "Mostrar _MENU_ entradas",
      },
      columns: [
        { "data": "word"},
        { "data": "description" },
      ]
    };
  }

}
